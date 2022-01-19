function findIfMatrixIsMagic(inputMatrix) {
    let checkSum = inputMatrix[0].reduce((a, b) => a + b);
    let sumCol = 0;
    let sumRow = 0;

    for (let i = 0; i < inputMatrix.length; i++) {

        sumRow = inputMatrix[i].reduce((a,b)=>a+b);
        if (sumRow !== checkSum) {
            return false;
        }
        sumRow=0;

        for (let j = 0; j < inputMatrix[i].length; j++) {
            sumCol += inputMatrix[i][j];
        }
        if (sumCol !== checkSum) {
            return false;
        }
        sumCol = 0;
    }

    return true;
}

console.log(findIfMatrixIsMagic(
	[[11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]]

));