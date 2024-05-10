type City = {
    name: string,
    population: number,
    treasury: number,
    taxRate: number,
    collectTaxes(): void,
    applyGrowth(percentage: number): void,
    applyRecession(percentage: number): void
}

function cityTaxes(name: string, population: number, treasury: number): City {
    return {
        name,
        population,
        treasury,
        taxRate: 10,

        collectTaxes(): void {
            this.treasury += Math.floor(this.population * this.taxRate)
        },

        applyGrowth(percentage: number): void {
            const growFactor: number = this.population * percentage / 100
            Math.floor(this.population += growFactor)
        },

        applyRecession(percentage: number): void {
            const recessionFactor: number = this.treasury * percentage / 100
            Math.floor(this.treasury += recessionFactor)
        },
    }
}

// const city =
//     cityTaxes('Tortuga',
//         7000,
//         15000)
// console.log(city)

const city =
    cityTaxes('Tortuga',
        7000,
        15000)
city.collectTaxes()
console.log(city.treasury)
city.applyGrowth(5)
console.log(city.population)

