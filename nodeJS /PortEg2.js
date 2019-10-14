var http = require('http');
var mom=require('moments')
http.createServer(function (req, res) {
  // add a HTTP header:
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!'+moment().format('MMMM Do YYYY, h:mm:ss a'));
  res.write(moment().format('MMMM Do YYYY, h:mm:ss a')); // September 13th 2019, 6:13:37 pm)
  res.end();}).listen(8080);