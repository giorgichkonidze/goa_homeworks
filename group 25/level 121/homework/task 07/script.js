class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
  }
}

