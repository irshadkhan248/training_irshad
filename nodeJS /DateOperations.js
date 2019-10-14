var moment = require("moment");
var moment1 = moment().format(process.argv[2]);
//console.log(moment1).toDate();
console.log(moment().format("L")); // 01/14/2013
console.log(moment().format("ll"));
console.log(moment().format("lll"));
console.log(moment().format("llll"));
var d = new Date("");
console.log(d);
var n = d.toLocaleTimeString();
var n1 = d.toLocaleDateString();
console.log(n);
console.log(n1);
