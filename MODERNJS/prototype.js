/* The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

Every function includes prototype object by default. */

/* The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function. */

/*https://www.tutorialsteacher.com/javascript/prototype-in-javascript */

class holiday{//creating a class holiday
    constructor(destination,stay){//creating a constructor function with constructor keyword
        this.destination=destination;//creating a property named destination and passsing a parameter
        this.stay=stay;
    }
}

holiday.prototype.info=function(){//we have added the info function in holidayh prototype
    console.log(`${this.destination} tour is booked for ${this.stay} days`);
}

const india = new holiday("pune",10);//creating instance of an function ( object )
const nepal = new holiday("kathmandu",5);

india.info();
console.log(india); // india object is displayed.
console.log(nepal.destination,nepal.stay);

//everything in javascript is an object
//functions ,array ,constructors they all inherit the object type except
//the  primitive data types in javascript .they are :
//null,undefined,strings,numbers,boolean and symbol
//thats why whenever we create any function or object or any such thing in js objet prototype
//is also get created and we are able to access it using .prototype.