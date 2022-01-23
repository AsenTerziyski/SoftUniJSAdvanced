function getCalories(input) {
    
    let inputLength = input.length;
    let result = {};

    for (let i = 0; i < inputLength; i++) {
        let product = input[i];
        let calories = Number(input[i + 1]);
        result[product] = calories;
        i++;
    }

    console.log(result);
}


getCalories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])