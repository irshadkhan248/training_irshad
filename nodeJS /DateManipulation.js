const moment = require('moment')
//console.log(moment().format('YYYY MM DD'));
var dateEntered = process.argv[2];

if (moment(dateEntered,'YYYY-MM-DD').isValid()) {
  console.log('Valid Date');
} else {
  console.log('Invalid Date, required format: MM-DD-YYYY');
}
//var date = moment("2019-09-16");
//var dow = dateEntered.day();

var dow = moment(dateEntered).format('dddd')
console.log("day of week:"+dow);

var tomorrow = new Date(dateEntered);
tomorrow.setDate(tomorrow.getDate() + 1);
console.log("tomorrow:"+tomorrow);

var yesterday =new Date(dateEntered);
yesterday.setDate(yesterday.getDate() - 1);
console.log("yesterday:"+yesterday);

var mydate = dateEntered;
var weekDayName =  moment(mydate).format('dddd');
var monthName =  moment(mydate).format('MMMM');
var year=moment(mydate).format('YYYY');
console.log("Today is:"+weekDayName);
console.log(monthName);
console.log(year)