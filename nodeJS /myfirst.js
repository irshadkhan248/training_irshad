var http = require('http');
var moment=require('moment');
var _=require('lodash');
var arr=[10,20,40,30,60]; 
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/json '});
    res.write('Hello World!');
    var moment1=moment().format('MMMM Do YYYY, h:mm:ss a'); 
    res.write("\n"+moment1);
    res.write('\n'+arr);
    res.write('\nReverse');
    var moment2=moment().format('MMMM Do YYYY, h:mm:ss a'); 
    res.write("\n"+moment2);
    res.write("\n"+_.reverse(arr));
    res.end();
}).listen(8001);