function printEveryNthElementFromArray(inputArr, step) {
    let resultArr = [];
    for(let i = 0; i<inputArr.length; i+=step) {
        resultArr.push(inputArr[i])
    }
    // console.log(resultArr);
    return resultArr;
}

printEveryNthElementFromArray(['5', '20', '31', '4', '20'], 3)