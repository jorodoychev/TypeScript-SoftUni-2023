"use strict";
class Box {
    constructor(data) {
        this._data = data;
    }
    toString() {
        return `${this._data} is of type ${typeof this._data}`;
    }
}
let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
//# sourceMappingURL=box.js.map