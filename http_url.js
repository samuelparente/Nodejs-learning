//Samuel Parente
//NODE JS
//CASE TEST:
//localhost:8080/anystringhere

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);