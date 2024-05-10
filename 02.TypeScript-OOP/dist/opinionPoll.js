"use strict";
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get personDetails() {
        return `${this._name} is ${this._age} years old.`;
    }
}
function createPerson(input) {
    const [name, age] = input.split(' ');
    return new Person(name, parseInt(age));
}
console.log(createPerson('Peter 12').personDetails);
//# sourceMappingURL=opinionPoll.js.map