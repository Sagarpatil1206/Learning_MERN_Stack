function welcome(user="Sagar",place="Pune"){//5
    alert(`Good morning ${user}, Welcome to ${place} virtual tour.`);
}
welcome("Sam");//here fucntion will take default argument for place i.e. pune and for user it will be sam
//if we dont pass the values at all it will be 'undefined' for both user and place

//6

// function greeting(message){
//     alert(`Your message is -${message}`);
// }

//one line function declaration
//if only one argument no need of ()
//no return is required for one statement
let greeting = message => alert(`Your message is -${message}`);

/* let greeting = (message) =>{
    alert('Your message is -');
    console.log(message);
} */

greeting("Hello world out there !!!");