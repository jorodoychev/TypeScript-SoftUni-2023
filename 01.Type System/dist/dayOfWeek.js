"use strict";
function dayOfWeek(day) {
    const days = new Map([
        ['Monday', 1],
        ['Tuesday', 2],
        ['Wednesday', 3],
        ['Thursday', 4],
        ['Friday', 5],
        ['Saturday', 6],
        ['Sunday', 7],
    ]);
    if (days.has(day)) {
        console.log(days.get(day));
    }
    else {
        console.log('error');
    }
}
dayOfWeek('Monday');
dayOfWeek('Sunday');
dayOfWeek('Sun');
// type DayType = {
//     [key: string]: number
// }
// function dayOfWeek(day: string): void {
//     const days: DayType = {
//         'Monday': 1,
//         'Tuesday': 2,
//         'Wednesday': 3,
//         'Thursday': 4,
//         'Friday': 5,
//         'Saturday': 6,
//         'Sunday': 7,
//     }
//
//     if (days.hasOwnProperty(day)) {
//         console.log(days[day])
//     } else {
//         console.log('error')
//     }
// }
//
// dayOfWeek('Monday')
// dayOfWeek('Friday')
// dayOfWeek('InvalidDay')
//# sourceMappingURL=dayOfWeek.js.map