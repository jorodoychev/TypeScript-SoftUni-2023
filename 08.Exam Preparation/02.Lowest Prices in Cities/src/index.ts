const input: string[] = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]

type NumberMap = {
    [key: string]: number
}
type ResultType = {
    [key: string]: NumberMap
}


function lowestPricesInCities(input: string[]): void {
    const result: ResultType = {}

    for (const line of input) {
        const [town, product, price] = line.split(' | ')


        if (result[product] === undefined) {
            result[product] = {}
        }

        result[product][town] = Number(price)

    }

    for (const [product, towns] of Object.entries(result)) {

        const sorted = Object.entries(towns).sort((a, b) => a[1] - b[1])
        const [town, price] = sorted[0]
        console.log(`${product} -> ${price} (${town})`)
    }


}

lowestPricesInCities(input)

// interface ProductInfo {
//     productName: string;
//     productLowestPrice: number;
//     townName: string;
// }
//
// function findLowestPrices(input: string[]): void {
//     const products: { [key: string]: ProductInfo } = {};
//
//     input.forEach(entry => {
//         const [townName, productName, productPriceStr] = entry.split(' | ');
//         const productPrice = parseFloat(productPriceStr);
//
//         if (!(productName in products) || productPrice < products[productName].productLowestPrice) {
//             products[productName] = {
//                 productName,
//                 productLowestPrice: productPrice,
//                 townName
//             };
//         }
//     });
//
//     for (const productName in products) {
//         const productInfo = products[productName];
//         console.log(`${productInfo.productName} -> ${productInfo.productLowestPrice} (${productInfo.townName})`);
//     }
// }
//
// // Example usage:
// const input: string[] = [
//     'TownA | ProductX | 10',
//     'TownB | ProductX | 8',
//     'TownC | ProductY | 15',
//     'TownA | ProductY | 12',
//     'TownB | ProductZ | 20',
//     'TownC | ProductZ | 18',
// ];
//
// findLowestPrices(input);


