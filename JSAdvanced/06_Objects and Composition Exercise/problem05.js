function lowestPricesInCities(input) {

    let inputArray = input.slice();
    let products = [];

    while (inputArray.length > 0) {
        let [town, product, price] = inputArray.shift().split(' | ');
        if (products.filter(x => x.product === product).length > 0) {
            let obj = products.find(x => x.product === product);
            if (obj.price > Number(price)) {
                obj.price = price;
                obj.town = town;
            }
        } else {
            let prc = Number(price);
            let obj = { town, product, price: prc };
            products.push(obj);
        }
    }

    for (const prod of products) {
        console.log(`${prod.product} -> ${prod.price} (${prod.town})`);
    }
    
}

lowestPricesInCities(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
);