
function lastKNumbersSequence(inputN, inputK) {

    let n = Number(inputN);
    let k = Number(inputK);
    let sequence = [];
    sequence[0] = 1;
    let sum = 0;
    let count = 1;
    for (let index = 1; index < n; index++) {
        while (count <= k) {
            if (index - count >= 0) {
                let currentElement = sequence[index - count];
                sum = sum + currentElement;
            }
            count++;
        }

        sequence[index] = sum;
        count = 1;
        sum = 0;
    }
    console.log(sequence);
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
lastKNumbersSequence(10, 5);
lastKNumbersSequence(1, 0);