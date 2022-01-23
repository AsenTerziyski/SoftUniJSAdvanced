function sumMatrixColumn(inputMatrix) {
        
    let sum = 0;
    let resultArray = [];

    for (let j = 0; j < inputMatrix.length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            let currentEllement = matrix[i][j];
            sum += currentEllement
        }
        resultArray.push(sum);
        sum = 0;
    }
    return resultArray;
}

matrix =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

console.log(sumMatrixColumn(matrix));
