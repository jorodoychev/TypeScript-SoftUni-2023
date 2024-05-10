"use strict";
function printAndSum(startNum, endNumber) {
    let sum = 0;
    for (let i = startNum; i <= endNumber; i++) {
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
//# sourceMappingURL=index.js.map