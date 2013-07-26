var express = require('express');

var app = express.createServer(express.logger());

// HW3
var fs = require('fs');
var indexContent = fs.readFileSync("index.html").toString(); // converts buffer to utf8 string

app.get('/', function(request, response) {
  response.send(indexContent);
});
// end of HW3

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
