//each file created in node is module
//its a good practice to modularize pur code (separate it in modules and use exporting and importing)

//1
/* function sum(a, b) {
  return a + b;
}

module.exports = {//an object
  sum, //or sum:sum (both the values are same so we can only write sum)
}; */

//OR

exports.sum = (a,b) => a+b; //{ return a+b;}

//2// module.exports=function(a,b){
//   return a+b;
// }