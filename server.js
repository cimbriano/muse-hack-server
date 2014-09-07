var app = require('express')();
var	server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function(req, response){
	response.sendfile(__dirname + "/index.html");
});


io.on('connection', function (socket) {
  console.log('Connection received.');

  socket.on('oscdata', function(oscdata){
    console.log(oscdata);
  });
});
