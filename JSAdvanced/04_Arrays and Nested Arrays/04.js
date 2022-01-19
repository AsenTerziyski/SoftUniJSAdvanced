function negativePositiveNumbers(inputArr) {
    let resultArr = [];
    for (let index = 0; index < inputArr.length; index++) {

        if (inputArr[index] < 0) {
            resultArr.unshift(inputArr[index]);
        } else {
            resultArr.push(inputArr[index]);
        }
    }
    console.log(resultArr.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);