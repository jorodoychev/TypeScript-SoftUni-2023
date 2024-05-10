import {Drink} from "./Drink"

export class VendingMachine {
    buttonCapacity: number
    drinks: Drink[]
    getCount: number

    constructor(buttonCapacity: number) {
        this.buttonCapacity = buttonCapacity
        this.drinks = []
        this.getCount = this.drinks.length
    }


    addDrink(drink: Drink): void {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink)
            this.getCount++
        }

    }

    removeDrink(name: string): boolean {
        const index = this.drinks.findIndex((drink) => drink.name === name)

        if (index !== -1) {
            this.drinks.splice(index, 1)
            this.getCount--
            return true
        }
        return false

    }

    getLongest(): Drink {
        return [...this.drinks].sort((a, b) => b.volume - a.volume)[0]
    }

    getCheapest(): Drink {
        return [...this.drinks].sort((a, b) => a.price - b.price)[0]
    }

    buyDrink(name: string): Drink | undefined {
        return this.drinks.find((drink) => drink.name === name)
    }

    report(): string {
        const drinksList = this.drinks.map((drink) => drink.toString()).join('\n')
        return `Drinks available:\n${drinksList}`
    }


}