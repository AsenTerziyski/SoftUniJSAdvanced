
function printSquareStars(num) {

    let row = '';
    for (let i = 1; i <= num; i++) {
        row += '* '
    }

    for (let i = 1; i <= num; i++) {
        console.log(row);
    }
}

printSquareStars(7);