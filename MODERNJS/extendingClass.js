//By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods

class holiday {
  //creating a class holiday
  constructor(destination, stay) {
    //creating a constructor function with constructor keyword
    this.destination = destination; //creating a property named destination and passsing a parameter
    this.stay = stay;
  }
  info() {
    //fucntion inside class
    console.log(`${this.destination} tour is booked for ${this.stay} days`);
  }
}

class expedition extends holiday {
  constructor(destination, days, gear) {
    super(destination, days);
    this.gear = gear;
  }
  info() {
    super.info();
    const [sunglassVar,...rest]=this.gear;
    console.log(`Bring ${rest} and ${sunglassVar}`);
  }
}

const travel = new expedition("Pune", 10, ["sunglasses", "boots", "camera"]);

travel.info();

//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
