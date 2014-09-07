var socket = require('socket.io'),
	express = require('express'),
	app = express(),
	io = socket.listen(app);

app.listen(8080);

app.get('/', function(req, response){
	response.sendfile(__dirname + "/index.html");
});


io.on('connection', function (socket) {
  console.log('Connection received.');

  socket.on('oscdata', function(oscdata){
    console.log(oscdata);
  });
});
