"use strict";
class Car {
    constructor(brand, model, horsepower) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get horsepower() {
        return this._horsepower;
    }
    set horsepower(value) {
        this._horsepower = value;
    }
    toString() {
        return `The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`;
    }
}
function createCar(input) {
    const [brand, model, horsepower] = input.split(' ');
    return new Car(brand, model, parseInt(horsepower));
}
const input = 'Chevrolet Impala 390';
const car = createCar(input);
console.log(car.toString());
//# sourceMappingURL=carInfo.js.map