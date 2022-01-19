function findSumOfDiagonalsOfMatrix(inputMatrix) {

    let matrix = inputMatrix;
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let index = 0; index < matrix.length; index++) {
        let currentElement1 = matrix[index][index];
        let currentElement2 = 0;
        if (index < matrix.length-1) {
            currentElement2 = matrix[index + 1][index + 1];
        }
        firstDiagonalSum = firstDiagonalSum + currentElement1 + currentElement2;
        index++;
    }

    for(let index = 0; index< matrix.length; index++ ) {
        let currentElement1 = matrix[index][matrix.length-1-index];
        let currnetElement2 = 0;
        if(index<matrix.length-1) {
            currnetElement2 = matrix[index+1][matrix.length-2-index];
        }
        index++;
        secondDiagonalSum = secondDiagonalSum + currentElement1 + currnetElement2;
    }

    let result = firstDiagonalSum + " " + secondDiagonalSum;
    console.log(result);
}

let testMatrix = [
    [6, 2, 3],
    [4, 1, 6],
    [7, 8, 9]
];

findSumOfDiagonalsOfMatrix(testMatrix);