var dgram = require("dgram");
var app = require('express')();

var	server = require('http').Server(app);
var io = require('socket.io')(server);
var socket = dgram.createSocket("udp4");



server.listen(8080);

app.get('/', function(req, response){
  response.sendFile(__dirname + "/index.html");
});


var message_counter = 0;

socket.on('message', function (client) {
  client.pipe(process.stdout);
  console.log('Message received.');

  client.on('oscdata', function(oscdata){

    client.broadcast.emit(oscdata.address, oscdata.args);
    message_counter += 1;

    if(message_counter % 2000 == 0) {
      console.log('Recieved 10k messages ' + message_counter / 2000);
    }
  });
});

socket.bind(4444);
// server listening 0.0.0.0:4444
