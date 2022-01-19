function findTwoSmallestNumbers(inputArray) {
    let sorted = inputArray.sort((a,b)=> {return a-b});
    let output = '';

    if (sorted.length >=2) {
        for (let i=0;i<2;i++) {
            output = output + sorted[i] + " ";
        }
    } else {
        output = sorted[0];

    }
    console.log(output);

}

findTwoSmallestNumbers([3, 0, 10, 4, 7, 3]);
findTwoSmallestNumbers([30, 15, 50, 5]);