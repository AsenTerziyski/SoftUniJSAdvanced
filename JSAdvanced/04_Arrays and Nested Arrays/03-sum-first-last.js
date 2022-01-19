function sumFirstLast(input) {

    let firstElement = input.shift();
    let lastElement = input.pop() || 0;

    return Number(firstElement) + Number(lastElement);

}

let result = sumFirstLast(['20', '30', '40']);
console.log(result);

