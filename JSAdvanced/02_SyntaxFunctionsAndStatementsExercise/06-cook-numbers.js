
function cookNumbers(number, c1, c2, c3, c4, c5) {

    let arrayOfCommands = [c1, c2, c3, c4, c5];
    let inputNumber = Number(number);
    let arrayOfCommandsL = arrayOfCommands.length;

    function chop(inputNumber) {
        return inputNumber / 2;
    }

    function dice(inputNumber) {
        return Math.sqrt(inputNumber);
    }

    function spice(inputNumber) {
        return inputNumber + 1;
    }

    function bake(inputNumber) {
        return inputNumber * 3;
    }

    function fillet(inputNumber) {
        return inputNumber - inputNumber * 0.2;
    }

    for (let index = 0; index < arrayOfCommandsL; index++) {
        let currentCommand = arrayOfCommands[index];
        switch (currentCommand) {
            case "chop": inputNumber = chop(inputNumber);
                break;
            case "dice":
                inputNumber = dice(inputNumber);
                break;
            case "spice":
                inputNumber = spice(inputNumber);
                break;
            case "fillet":
                inputNumber = fillet(inputNumber);
                break;
            case "bake":
                inputNumber = bake(inputNumber);
                break;

        }
        console.log(inputNumber);
    }
}

// cookNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');