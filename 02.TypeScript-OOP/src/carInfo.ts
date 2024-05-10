class Car {
    private _brand: string
    private _model: string
    private _horsepower: number

    constructor(brand: string, model: string, horsepower: number) {
        this._brand = brand
        this._model = model
        this._horsepower = horsepower
    }

    get brand(): string {
        return this._brand
    }

    set brand(value: string) {
        this._brand = value
    }

    get model(): string {
        return this._model
    }

    set model(value: string) {
        this._model = value
    }

    get horsepower(): number {
        return this._horsepower
    }

    set horsepower(value: number) {
        this._horsepower = value
    }

    toString(): string {
        return `The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`
    }
}

function createCar(input: string): Car {
    const [brand, model, horsepower] = input.split(' ')
    return new Car(brand, model, parseInt(horsepower))
}


const input: string = 'Chevrolet Impala 390'
const car: Car = createCar(input)

console.log(car.toString())




