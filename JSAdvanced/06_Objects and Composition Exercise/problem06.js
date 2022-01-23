function storeCatalogue(input) {
    
    let resultArray = input.slice();
    resultArray.sort((a, b) => a.localeCompare(b));

    let current = [];
    let firstLetter = '';

    for (let i = 0; i < resultArray.length; i++) {

        current = resultArray[i].split(' : ');

        if (resultArray[i][0] !== firstLetter) {
            firstLetter = resultArray[i][0];
            console.log(firstLetter);
        }

        console.log(`${current[0]}: ${Number(current[1])}`);
        firstLetter = current[0][0];
    }
}

storeCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);