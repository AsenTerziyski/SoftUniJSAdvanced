function solve(input) {
    let brands = new Map();

    while (input.length) {
        let [brand, model, quantity] = input.shift().split(' | ');
        if (!brands.has(brand)) {
            let models = new Map();
            models.set(model, Number(quantity));
            brands.set(brand, models);
        } else {
            let models =  brands.get(brand);
            if (!models.has(model)) {
                models.set(model, Number(quantity))
            } else {
                let q = models.get(model);
                models.set(model, Number(quantity)+q)
            }           
        }
    }

    for (let [key, value] of brands) {
        console.log(key);
        for (let [m,q] of value) {
            let ouput = `###${m} -> ${q}`
            console.log(ouput)
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)