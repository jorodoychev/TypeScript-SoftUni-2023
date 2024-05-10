"use strict";
class CompareElements {
    constructor(arr) {
        this._arr = arr;
    }
    compare(comparator) {
        let count = 0;
        this._arr.forEach(el => {
            if (el === comparator) {
                count++;
            }
        });
        return count;
    }
}
let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare('b'));
console.log(d.compare(1));
//# sourceMappingURL=GenericCompareElements.js.map