var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected' + socket.id);

  socket.on('update', () =>{
    console.log('vao');
      io.emit('update')
    });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});