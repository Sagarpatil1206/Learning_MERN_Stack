var a = "rama"; //3 //part of window object and difficult to override in large code which might occur
a = "shyam"; //window.a will give shyam not window.b as a is  a part of windpw object

let b = "rama";
b = "shyam";

//if value of const is object we cant change it but can change its properties
//we can create object using {} or "new Object" keyword

/* let obj = new Object(); //3.1
obj = {
  name: "sagar",
};
console.log(obj.name); */ //semicolon at the end of object is necessary

// or just by
//let obj={}; // 3.2 // inside {} we can add object's properties
/* let obj={
    name:"fdsdfsd",
};
console.log(obj.name); */ 

// let obj={};
const obj ={//crating constant object
    name:"sagars",
};
obj.name="raghav";//here it runs as we just changing value of its property
console.log(obj.name);
