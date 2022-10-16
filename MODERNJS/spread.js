//spread operator

/* const indianCities = ["pune", "delhi", "chennai"];
const russianCities = ["moscow", "kazan", "samara"];

const allCities = [...indianCities, ...russianCities]; */

// console.log(allCities.join(" - "));

//rest operator

/* allCities.push("shirpur");
[first,...rest]=allCities;
console.log(rest); */

//rest operaor 2.o

const user={
    name:"sagar",
    email:"sagarpatil@gmail.com",
    password:"sadjkfj",
    age:"20",
}

const {password,...rest} = user; //syntax

console.log(rest);
