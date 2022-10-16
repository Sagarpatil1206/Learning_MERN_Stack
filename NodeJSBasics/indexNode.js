console.log("Getting started with node");
//in terminal cd path
//node indexNode.js and file will execute

var moment = require('moment');//from momentjs.com

var myDate=new Date();
var myNewDate=moment(myDate).format('LLLL');//changing the original date

console.log(myNewDate);

console.log(module);
