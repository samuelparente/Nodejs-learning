//Samuel Parente
//NODE JS

var http = require('http'); //Require is to use modules

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);