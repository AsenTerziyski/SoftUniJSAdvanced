
// 3 ways of creating functions:

// 1. function declarations
function printFullName() {
    console.log('James' + ' ' + 'Hetfield');
};


// function invokation
printFullName();

function printFullNameSecond(firstName, lastName) {
    console.log(firstName + " " + lastName);
};

printFullNameSecond('Axl', 'Rose');


// 2. function expression
let countDown = function (number = 7) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }

};

countDown();

// function invokation
countDown(10);

// 3. arrow function
let countUp = (max) => {
    for (let i = 1; i <= max; i++) {
        console.log(i);
    }
};

// function invokation
countUp(15);

function sum(a, b) {
    return a + b;
};

let result = sum(2, 30);
console.log(result);

console.log('SUM = ' + sum(5, 20) + ';');

let sumArrow = (a, b) => a + b;

console.log('SUM ARROW: ' + sumArrow(100, 200) + ';');

