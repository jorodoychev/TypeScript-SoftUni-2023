type CalcType = {
    [key: string]: string
}

function calc(firstNum:number, operator:string, secondNum:number):string {
    const calculator: CalcType = {
        '+': (firstNum + secondNum).toFixed(2),
        '-': (firstNum - secondNum).toFixed(2),
        '/': (firstNum / secondNum).toFixed(2),
        '*': (firstNum * secondNum).toFixed(2),
    };

    return calculator[operator]
}

console.log(calc(5, '+', 10))
console.log(calc(11, "-", 3))
console.log(calc(12, "/", 3))
console.log(calc(2, "*", 3))

