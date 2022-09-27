var http = require('http');
var externalModule = require('./externalModule.js')

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The date and time are currently: ' +externalModule.myDateTime())
    res.end('Hello Njonge!');
}).listen(8080);