const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000
const index = '/index.html'
app.use (express.static(__dirname + '/../../build'))



const users = {};

io.on('connection', socket => {
    socket.on('new-user', name => {
    users[socket.id] = name;
    socket.broadcast.emit('user-connected', name);
    })
    socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] });
    socket.emit('chat-message', { message: message, name: users[socket.id] });
    })
    socket.on('disconnect', name => {
    socket.broadcast.emit('user-disconnected', users[socket.id]);
    delete users[socket.id];
    })
})