var app = require('express')();
var	server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function(req, response){
	response.sendFile(__dirname + "/index.html");
});


io.on('connection', function (client) {
	console.log('Connection received.');

	client.on('oscdata', function(oscdata){

		client.broadcast.emit(oscdata.address, oscdata.args);
		
	    console.log(oscdata);
  });
});
