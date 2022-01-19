
function demoFunctionModifyingArrays(input) {
    let arr = [];
    arr = input.slice(0);
    console.log(arr);

    // 1. pop
    let lastElement = arr.pop();
    console.log(`Removed ${lastElement}`);

    // 2. push
    console.log("Pushed element.")
    arr.push(1000);

    // 3. shift
    let shiftedElement = arr.shift();
    console.log(`Shifted ${shiftedElement}`);

    // 4. unshift
    arr.unshift(888);

    // 5.splice
    arr.splice(0,2);

    arr.splice(3,1); // ще махне елемент на позия 3!

    arr.splice(3, 1, 11111);

    // 6.reverse
    arr.reverse();

    // 7. sort
    let sortedArray = arr.sort(function (a, b) { return b - a; });
    console.log(demoArr);
    console.log(sortedArray);

    let stringArray = ['aa', 'bb', 'BB', 'AA', 'aa', 'c', 'C'];
    console.log(stringArray);
    stringArray.sort((first, second) => {
        return first.length - second.length;
    })
    console.log(stringArray);

    stringArray.sort((f, s) => {
        s.localeCompare(f);
    });
    console.log(stringArray);
    console.log(stringArray.join('|->>>'))

    // 8. slice
    let copy = stringArray.slice(0, 2);
    console.log(copy);

}

let demoArr = [1, 2, 30, 411, 50, 6, 7000, 8];
demoFunctionModifyingArrays(demoArr);

function reverseString(inputString) {
    //demo how to reverse string:
    let arr = [];
    arr = inputString
        .split('')
        .reverse()
        .join('');
    // let outputString = '';
    // for (let index = arr.length-1; index>=0; index--) {
    //     outputString = outputString + arr[index];
    // }
    // console.log(outputString);
    console.log(arr);
}

reverseString("abcdefghijklm");

demoArr = [1, -2, 30, -411, 50, 6, 7000, -8];
let squares = demoArr.map((a) => Math.pow(a,2));
console.log(demoArr);
console.log(squares);