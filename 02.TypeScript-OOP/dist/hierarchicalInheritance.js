"use strict";
class Animal {
    eat() {
        console.log('eating');
    }
    move() {
        console.log('moving');
    }
}
class Dog extends Animal {
    bark() {
        console.log('barking');
    }
}
class Cat extends Animal {
    meow() {
        console.log('meowing');
    }
}
const jacky = new Dog();
jacky.bark();
jacky.eat();
jacky.move();
const puffy = new Cat();
puffy.eat();
puffy.meow();
//# sourceMappingURL=hierarchicalInheritance.js.map