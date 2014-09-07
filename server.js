var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });

}


io.on('connection', function (socket) {
  console.log('Connection received.');


  socket.on('oscdata', function(oscdata){
    console.log(oscdata);
  });
});
