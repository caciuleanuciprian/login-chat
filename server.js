const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 8000;

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': ''})
    fs.readFile('index.html', function(error, data){
      if(error){
        res.writeHead(404)
        res.write('Error:File Not Found')
      }else{
        res.write(data)
      }
      res.end();
    })
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