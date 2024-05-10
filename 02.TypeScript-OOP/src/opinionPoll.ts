class Person {
    private readonly _name: string
    private readonly _age: number

    constructor(name: string, age: number) {
        this._name = name
        this._age = age
    }

    get personDetails(): string{
        return `${this._name} is ${this._age} years old.`
    }


}

function createPerson(input:string): Person {
    const [name, age] = input.split(' ')
    return new Person(name, parseInt(age))
}

console.log(createPerson('Peter 12').personDetails)




