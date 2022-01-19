function diagonalAttack(inputStringMatrix) {

    let matrix = [];
    while (inputStringMatrix.length > 0) {
        let row = inputStringMatrix.shift().split(' ').map(Number);
        matrix.push(row);
    }

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {

        let currentElement1 = matrix[i][i];
        let currentElement2 = 0;

        if (i + 1 < matrix.length) {
            currentElement2 = matrix[i + 1][i + 1];
        }
        primaryDiagonalSum = primaryDiagonalSum + currentElement1 + currentElement2;

        let currentElement3 = matrix[i][matrix[i].length - 1 - i];
        let currentElement4 = 0;
        if (matrix[i].length - 1 - i > 0) {
            let t = matrix[i + 1].length - 2 - i;
            currentElement4 = matrix[i + 1][t];
        }
        secondaryDiagonalSum = secondaryDiagonalSum + currentElement3 + currentElement4;
        i++;
    }

    if (primaryDiagonalSum === secondaryDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (j !== matrix.length - 1 - i && j != i) {
                    // matrix[i][j] = primaryDiagonalSum;
                    matrix[i][j] = 'x';
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

diagonalAttack(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);