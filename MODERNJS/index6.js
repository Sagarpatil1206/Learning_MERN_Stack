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

const trip1 = new holiday("Sydeney", 7); //creating instance of holiday class
console.log(trip1.destination,trip1.stay);

const trip2 = new holiday("Pune", 6);
trip2.info();