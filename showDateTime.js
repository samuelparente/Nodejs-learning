//Samuel Parente
//NODE JS
var http = require('http');
var dt = require("./modules/dateTimeModule.js");

http.createServer(function (req, res) {
  console.log('Request received'); // Check if request is received
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  console.log("Response sent: The date and time are currently: " + dt.myDateTime()); // Check if response is being sent
  res.end();
}).listen(8080);
