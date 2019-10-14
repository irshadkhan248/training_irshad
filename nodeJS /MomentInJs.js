// node:
var moment = require('moment');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
var d = new Date();
console.log(d);
// // 'in 2 days'

// moment().subtract('days', 2).fromNow();
// // '2 days ago'

// moment('November 1977').fromNow()
// // '34 years ago'

// moment().add('days', 2).calendar();
// // 'Monday at 8:30 AM'

// moment().subtract('days', 2).calendar();
// // 'last Thursday at 8:30 AM'

// moment('1977-08-20 14:29:00 UTC').format('MMM. d, YYYY');
// // 'Aug. 5, 1977'

// moment('1977-08-20 14:29:00 UTC').fromNow();
// // 'il y a 35 années'