var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('jokes.json', function(err, data) {
    let jokes = JSON.parse(data);
    let randomJokeID = Math.floor(Math.random() * jokes.length);
    let jokeObject = { "joke": jokes[randomJokeID]};

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(jokeObject));
    return res.end();
  });
}).listen(8080);