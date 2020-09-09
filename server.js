const http = require('http')
const port = process.env.PORT || 8000;

const server = http.createServer(function(req, res){
  
  
})

server.listen(port, function(error){
  if(error){
    console.log('Something went wrong', error)
  }else{
    console.log('Server is listening on port ' + port)
  }
})

const io = require('socket.io')(3000);

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