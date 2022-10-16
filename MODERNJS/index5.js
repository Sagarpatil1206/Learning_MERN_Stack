//this keyword refers to the enclosing context ..
//normally within { } scope

function sayhi() {
    console.log(this);//scope is global
}

sayhi();

let australia = {
  //here context of this is within { } braces
  cities: ["Sydney", "Melbourne", "Adelaide"],
  printWithDash() {
    console.log(this);//scope within enclosing context
    alert(this.cities.join(" - "));
  },
};

australia.printWithDash();//calling function through object
// The object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables.
//This statement defines the variables name and realName, then assigns to them the values of properties hero.name and hero.realName correspondigly.