var express = require('express');
var app = express();
var	server = require('http').Server(app);
var io = require('socket.io')(server);

var util = require('util'),
		twitter = require('twitter');
var twit = new twitter({
		consumer_key: 'loKSPYFml4LivjXsMjHzqXv3c',
		consumer_secret: 'cZmUwJbIZoWZU6EFo7kWGkdCrwh1QB30EoVEVUQfFM1BOIfQ2A',
		access_token_key: '32316084-PvKj8q58u2S58M17YOCyd2UoGTUPfG9pcfbFFQt8Z',
		access_token_secret: 'hYdFyezlJWrAhagBGoXjdOsaoKLXMESr0gu28eagxSs6K'
});

server.listen(8080);

app.use(express.static(__dirname + '/'));

app.get('/', function(req, response){
	response.sendFile(__dirname + "/index.html");
});



var message_counter = 0;
io.on('connection', function (client) {
	console.log('Connection received.');

	client.on('oscdata', function(oscdata){

		console.log(Date.now() - oscdata.timeInMs + "ms of latency"); //Outputs latency from the local to the remote server
		client.broadcast.emit(oscdata.address, oscdata);
		message_counter += 1;

		if(message_counter % 2000 == 0) {
			console.log('Recieved 2k messages ' + message_counter / 2000);
		}
  });

	client.on('zenachieved', function(data){
		// var tweet = "I've achieved zen @TechCrunch #HackDisrupt w/ @cimbriano, @sparkdevices, @digitalocean, and @twitterdev.";
		var tweet = "Zentesting.";

		twit
		.verifyCredentials(function(data) {
				// console.log(util.inspect(data));
		})
		.updateStatus(tweet,
				function(data) {
						// console.log(util.inspect(data));
				}
		);
	});


});
