var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);//represent the request from the client and has a property callled url
    //which holds the part of the url that comes after the domain name
    res.end();
}).listen(8080);