function sortListOfNames(inputArr) {
    
    let outputArr = [];
    outputArr = inputArr.slice();
    outputArr.sort((a, b) => a.localeCompare(b));

    let orderNumber = 1;

    outputArr
        .forEach(element => {
            console.log(`${orderNumber}.${element}`);
            orderNumber++;
        });
}

sortListOfNames(["John", "Bob", "Christina", "Ema"]);