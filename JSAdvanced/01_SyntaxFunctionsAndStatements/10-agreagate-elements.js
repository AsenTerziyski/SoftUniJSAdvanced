function agregateElemnets(elements) {

    const array = elements;

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);

    sum = 0;
    for (let i = 0; i < array.length; i++) {
        let a;
        a = 1 / array[i];
        sum += a;
    }
    console.log(sum);

    let output = '';
    for (let i = 0; i < array.length; i++) {
        output += array[i];
    }
    console.log(output);

}

agregateElemnets([1, 2, 3]);
agregateElemnets([2, 4, 8, 16]);