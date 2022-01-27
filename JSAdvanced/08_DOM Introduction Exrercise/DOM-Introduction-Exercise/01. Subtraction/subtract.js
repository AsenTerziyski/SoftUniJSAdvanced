function subtract() {
    // console.log('Started subtract function...');
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let subtraction = firstNumber - secondNumber;
    let resultElement = document.getElementById('result');
    resultElement.textContent = subtraction;
    // console.log(subtraction);
    // console.log('Finifshed subtract function!');
}