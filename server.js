var app = require('express')();
var	server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function(req, response){
	response.sendFile(__dirname + "/index.html");
});


var message_counter = 0;
io.on('connection', function (client) {
	console.log('Connection received.');

	client.on('oscdata', function(oscdata){

		client.broadcast.emit(oscdata.address, oscdata.args);
		message_counter += 1;

		if(message_counter % 10000 == 0) {
			console.log('Recieved 10k messages');
		}
  });
});
