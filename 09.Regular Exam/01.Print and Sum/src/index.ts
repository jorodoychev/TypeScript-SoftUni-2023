function printAndSum(startNum: number, endNumber: number): void {
    let sum: number = 0

    for (let i: number = startNum; i <= endNumber; i++) {
        console.log(i)
        sum += i
    }

    console.log(`Sum: ${sum}`)

}

printAndSum(5, 10)
printAndSum(0, 26)
printAndSum(50, 60)

