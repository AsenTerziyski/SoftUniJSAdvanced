function extractIncreasingSubsetFromArray(inputArr) {

    let currentMax = inputArr[0];

    for (let i = 1; i < inputArr.length; i++) {

        let currentElement = inputArr[i];

        if (currentMax < currentElement) {
            currentMax = currentElement
        } else {
            inputArr.splice(i, 1);
            i--;
        }

    }

    return inputArr;
}

// extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// extractIncreasingSubsetFromArray([1, 2, 3, 4]);
// extractIncreasingSubsetFromArray([20, 3, 2, 15,6, 1]);
extractIncreasingSubsetFromArray([10]);