//Samuel Parente
//NODE JS
//CASE TEST:
//localhost:8080?firstname=samuel&lastname=parente

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.firstname + " " + q.lastname;
  res.write(txt);
  res.end();
}).listen(8080);