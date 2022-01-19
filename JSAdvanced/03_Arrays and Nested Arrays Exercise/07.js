function sortingNumbers(inputArr) {
    
    let resultArray = [];
    inputArr.sort((a, b) => a - b);

    while (inputArr.length !== 0) {
        resultArray.push(inputArr.shift());
        resultArray.push(inputArr.pop());
    }

    let finalResult = resultArray.filter((el) => {
        return typeof (el) !== 'undefined';
    })

    return finalResult;

}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 100]));