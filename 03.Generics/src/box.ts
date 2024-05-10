class Box<T> {
    private readonly _data: T

    constructor(data: T) {
        this._data = data
    }


    toString(): string {
        return `${this._data} is of type ${typeof this._data}`
    }
}


let box1 = new Box(['test'])
let box2 = new Box(20)
let box3 = new Box('Hello')

console.log(box1.toString())
console.log(box2.toString())
console.log(box3.toString())
