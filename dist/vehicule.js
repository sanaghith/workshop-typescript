"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("start engin");
    }
}
const myCar = new Car("test", "model", 2024);
console.log('myCar', myCar);
