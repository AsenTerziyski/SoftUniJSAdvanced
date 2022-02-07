function addItem() {
    // console.log('TODO:...');
    // let newText = document.getElementById('newItemText').value;
    // let newValue = document.getElementById('newItemValue').value;

    // let option = document.createElement('option');
    // option.text = newText;
    // option.value = newValue;

    // let menu = document.getElementById('menu');
    // if (newText !== '' && newValue !== '') {
    //     menu.appendChild(option);
    // }

    // //понеже са референции ги нулираме:
    // document.getElementById('newItemText').value = '';
    // document.getElementById('newItemValue').value = '';

    console.log('Start...');
    
    let newText = document.getElementById("newItemText").value;
    let newValue = document.getElementById("newItemValue").value;

    let option = document.createElement('option');
    option.text = newText;
    option.value = newValue;

    let menu = document.getElementById('menu');
    
    if (newText !== '' && newValue !== '') {
        menu.appendChild(option)
    };

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

    console.log('..............End!')
}