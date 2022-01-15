function gcd(a, b) {

    let firstNumber = Number(a);
    let secondNumber = Number(b);
    while (firstNumber !== secondNumber) {
        if (firstNumber > secondNumber) {
            firstNumber = firstNumber - secondNumber;
        } else {
            secondNumber = secondNumber - firstNumber;
        }
    }
    console.log(firstNumber);
}

gcd(15,5);
gcd(5,15);