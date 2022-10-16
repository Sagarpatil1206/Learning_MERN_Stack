let fname = "Sagar";
let lname = "Patil";
let age = prompt("Please enter your age :");

//without using template strings
let statement = fname + " " + lname + " is " + age + " years old."; //if we break it,it still prints single line text 
console.log(statement);

//OR
//using template strings

let sentence = `${fname} ${lname} 
is ${age} years old`; //in ${} we have to put variables `` is backticks sign
console.log(sentence); //we can write multiline text with the help of this as well
