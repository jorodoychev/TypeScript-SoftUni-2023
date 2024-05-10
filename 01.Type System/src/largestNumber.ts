function largestNumber(num1: number, num2: number, num3: number): void {
    const number: number = Math.max(num1, num2, num3)

    console.log(`The largest number is ${number}.`)
}

largestNumber(5, -3, 16)
largestNumber(-3, -5, -22.5)