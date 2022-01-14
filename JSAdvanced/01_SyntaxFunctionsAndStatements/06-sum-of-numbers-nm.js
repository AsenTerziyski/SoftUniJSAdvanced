
function sumOfNumbersNM(n, m) {

    let numbOne = Number(n)
    let numbTwo = Number(m)
    let result = 0;

    for (let i = numbOne; i <= numbTwo; i++) {
        result += i;
    }

    return result;
}

let result = sumOfNumbersNM('-8', '20');
console.log(result);

