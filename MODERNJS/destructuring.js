//The object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables.

// let thingToDo = {
//   morning: "Exercise",
//   afternoon: "Work",
//   evening: "code",
//   night: ["sleep", "eat", "dream"],
// };

// let { morning, afternoon, evening, night } = thingToDo;
// // morning="run";

// console.log(night);

//AND

// function uniStudent({fname,university,age}) { //destructuring student object in parameter
//     //let {fname,university,age}=student;
//   console.log(`${fname} is a student of ${university} of age ${age}.`);
// }

// uniStudent({
//   fname: "sagar",
//   university: "SPPU",
//   age: "20",
// });

//Destructuring Array

const [,,teen,char]=["first","second","third","fourth"];
console.log(char);
