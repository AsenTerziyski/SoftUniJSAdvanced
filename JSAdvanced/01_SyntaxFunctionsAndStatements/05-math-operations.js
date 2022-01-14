function solve (numb1, numb2, operator) {

    let result;
    switch (operator) {
        case '+': result = numb1 + numb2; break;
        case '-': result = numb1 - numb2; break;
        case '/': result = numb1 / numb2; break;
        case '*': result = numb1 * numb2; break;
        case '%': result = numb1 % numb2; break;
        case '**': result = numb1 ** numb2; break;
    }
    console.log(result);
    // return result;
}

solve(5, 6, '+');
solve(5, 6, '-');
// let result = solve(5, 6, '/');
// console.log(result.toFixed(2));
solve(6,7,'%');
solve(2,2,'**');

let test = 109 % 10;
test = Math.floor(109/10);
test = test % 4;
console.log(test);