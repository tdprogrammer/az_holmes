var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('trying to get more text in it...dont know how!\n');
  res.end('Hello World\n');
}).listen(port);