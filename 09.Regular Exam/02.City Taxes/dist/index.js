"use strict";
function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            const growFactor = this.population * percentage / 100;
            Math.floor(this.population += growFactor);
        },
        applyRecession(percentage) {
            const recessionFactor = this.treasury * percentage / 100;
            Math.floor(this.treasury += recessionFactor);
        },
    };
}
// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000)
// console.log(city)
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
//# sourceMappingURL=index.js.map