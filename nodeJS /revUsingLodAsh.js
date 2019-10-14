var http = require('http');
var colors = require('colors');
var moment=require('moment');
var _=require('lodash');
var input1=process.argv[2];
var moment1=moment().format('MMMM Do YYYY, h:mm:ss a'); 
var arr=[10,20,40,30,60];
var moment2=moment().format('MMMM Do YYYY, h:mm:ss a'); 
var arr2=_.reverse(arr);
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write('\n'+arr);
    res.write('\nReverse');
    res.write('\n'+arr2);
    }).listen(8001);