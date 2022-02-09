
function getNumber() {
    let randNumb = Math.random();
    if (randNumb < 0.7) {
        throw new Error('Your number is too low');
    }
    return Math.floor(randNumb * 100);
}


function app() {
    console.log('START...')
    // let number;
    try {
        number = getNumber();
        console.log(number);
    } catch (err) {
        console.log(err + "!");
        console.log(err.stack);
    } finally {
        console.log('END!')
    }
    // console.log(number);
}

app();