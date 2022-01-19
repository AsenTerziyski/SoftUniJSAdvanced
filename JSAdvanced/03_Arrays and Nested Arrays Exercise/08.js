function sortArrayBy2Criteria(inputStrArray) {
    let outputArray = inputStrArray.slice();

    return outputArray
        .sort((a, b) => {
            return (a.length - b.length) || a.localeCompare(b);
        })
        .join('\n');

}

let input = ['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
    ;

console.log(sortArrayBy2Criteria(input));

