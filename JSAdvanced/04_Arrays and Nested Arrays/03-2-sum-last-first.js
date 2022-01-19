function sumFirstLast(inputArr) {

    let sum = 0;
    for (let index = 0; index < inputArr.length; index++) {
        let currentElement = Number(inputArr[0]);
        let currentElement2 = Number(inputArr[inputArr.length - 1]);
        if (inputArr.length === 1) {
            currentElement2 = 0;
        }
        if (inputArr.length === 0) {
            sum = 0;
            break;
        }
        sum = currentElement + currentElement2;
        break;
    }
    console.log(sum);
}

let test = ['20', '30', '40'];
sumFirstLast(test);
sumFirstLast(['5', '10']);
sumFirstLast(['5']);
sumFirstLast([]);
sumFirstLast([10, 20, 30, 40, 50]);