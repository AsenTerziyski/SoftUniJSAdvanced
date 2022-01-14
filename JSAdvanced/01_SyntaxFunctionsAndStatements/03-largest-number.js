
let numb1;
let numb2;
let numb3;

function findLargestNumber(numb1, numb2, numb3) {

    let result;

    if (numb1 > numb2 && numb1 > numb3) {
        result = numb1;
    } else if (numb2 > numb1 && numb2 > numb3) {
        result = numb2;
    } else {
        result = numb3;
    }

    // трябва да са тези кавички: ``
    console.log(`The largest number is ${result}.`);
}

findLargestNumber(1, 2, 3); 
findLargestNumber(-3, -5, -22.5);