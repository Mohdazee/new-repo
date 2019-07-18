var km = require("./km");

var time = require("./time");

a = process.argv.slice(2);

var res = km.kmCalc(a[0]) + time.timeCalc(a[1]);

console.log(res);