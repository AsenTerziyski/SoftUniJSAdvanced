function rotateArray(inputArr, rotations) {
    let arr = [];
    arr = inputArr.slice();
    for (let i = 0; i < rotations; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
