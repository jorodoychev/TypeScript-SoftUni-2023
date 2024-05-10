class Animal {
    public eat(): void {
        console.log('eating')
    }

    public move(): void {
        console.log('moving')
    }

}

class Dog extends Animal {
    public bark(): void {
        console.log('barking')
    }
}

class Cat extends Animal {
    public meow(): void {
        console.log('meowing')
    }
}


const jacky = new Dog()
jacky.bark()
jacky.eat()
jacky.move()


const puffy = new Cat()
puffy.eat()
puffy.meow()