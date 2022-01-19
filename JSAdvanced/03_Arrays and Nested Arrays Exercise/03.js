
function addRemoveElements(inputCommands) {
    let commands = [];
    let output = [];
    commands = inputCommands;
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        switch (currentCommand) {
            case 'add':
                output.push(i + 1);
                break;
            case 'remove':
                output.pop()
                break;
        }

    }

    if (output.length === 0) {
        console.log('Empty');
    } else {
        console.log(output.join('\n'));
    }

}

addRemoveElements(['add', 'add', 'add', 'add']);
addRemoveElements(['remove', 'remove', 'remove']);

