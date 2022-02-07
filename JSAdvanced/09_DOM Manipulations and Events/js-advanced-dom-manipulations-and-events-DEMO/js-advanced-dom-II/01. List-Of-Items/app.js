function addItem() {
    // let inputElement = document.getElementById('newItemText');
    // let itemsElement = document.getElementById('items');
    // let liElement = document.createElement('li');
    // liElement.textContent = inputElement.value;
    // itemsElement.appendChild(liElement);

    //my solutuion
    console.log('Start...');
    let inputElement = document.querySelector('#newItemText');
    let itemsElement = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    itemsElement.appendChild(liElement);
    console.log('END!')
}