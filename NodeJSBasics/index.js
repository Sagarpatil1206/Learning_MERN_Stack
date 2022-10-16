const helpers=require("./helpers")
const total=helpers(100,250); //as theres only one module which is exported use 'helpers.sum' when multiple files imported of same type
console.log(total);

//OR

// const {sum}=require("./helpers")  //{sum} destructuring 
// //for importing we use 'require' keyword (of node) and write which module we require as it's parameter
// const total=sum(100,250);

//helpers.js