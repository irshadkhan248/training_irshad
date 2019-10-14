const moment = require('moment')

var date = process.argv[2];

var year = moment(date).format('YYYY')
var month =moment(date).format('MMMM')
var day =moment(date).format('DD')
console.log(year)
console.log(month)
console.log(day)