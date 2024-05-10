"use strict";
function calc(firstNum, operator, secondNum) {
    const calculator = {
        '+': (firstNum + secondNum).toFixed(2),
        '-': (firstNum - secondNum).toFixed(2),
        '/': (firstNum / secondNum).toFixed(2),
        '*': (firstNum * secondNum).toFixed(2),
    };
    return calculator[operator];
}
console.log(calc(5, '+', 10));
console.log(calc(11, "-", 3));
console.log(calc(12, "/", 3));
console.log(calc(2, "*", 3));
//# sourceMappingURL=index.js.map