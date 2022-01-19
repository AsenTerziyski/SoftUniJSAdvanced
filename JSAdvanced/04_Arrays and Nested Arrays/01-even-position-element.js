function evenPosition(input) {
    let arr = input;
    let output = '';
    for (let index = 0; index < arr.length; index++) {

        if (index % 2 === 0) {
            output = output + arr[index] + ' ';
        }
    }
    console.log(output.trim());

}

evenPosition(['20', '30', '40', '50', '60']);