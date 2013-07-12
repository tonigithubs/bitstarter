var express = require('express');

var app = express.createServer(express.logger());

// HW3
var fs = require('fs');
var indexContent = fs.readFileSync("index.html").toString(); // converts buffer to utf8 string

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(indexContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
