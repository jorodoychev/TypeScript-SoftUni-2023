"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    getCount;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
        this.getCount = this.drinks.length;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
            this.getCount++;
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((drink) => drink.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            this.getCount--;
            return true;
        }
        return false;
    }
    getLongest() {
        return [...this.drinks].sort((a, b) => b.volume - a.volume)[0];
    }
    getCheapest() {
        return [...this.drinks].sort((a, b) => a.price - b.price)[0];
    }
    buyDrink(name) {
        return this.drinks.find((drink) => drink.name === name);
    }
    report() {
        const drinksList = this.drinks.map((drink) => drink.toString()).join('\n');
        return `Drinks available:\n${drinksList}`;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map