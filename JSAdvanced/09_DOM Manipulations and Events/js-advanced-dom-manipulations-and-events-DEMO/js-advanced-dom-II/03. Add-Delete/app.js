function addItem() {
    // let itemsElement = document.getElementById('items');
    // let inputElement = document.getElementById('newItemText');

    // let liElement = document.createElement('li');
    // liElement.textContent = inputElement.value;
    // inputElement.value = '';

    // let deleteElement = document.createElement('a');
    // deleteElement.href = '#';
    // deleteElement.textContent = '[Delete]';
    // deleteElement.addEventListener('click', (e) => {
    //     e.currentTarget.parentElement.remove();
    // });

    // liElement.appendChild(deleteElement);
    // itemsElement.appendChild(liElement);

    console.log('Start...');
    // debugger
    let itemsElement = document.querySelector('#items');
    let inputElement = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = 'DEL!';
    deleteElement.addEventListener('click', delFunction);

    function delFunction (e) {
        e.currentTarget.parentElement.remove();
    }

    liElement.appendChild(deleteElement);

    itemsElement.appendChild(liElement);

    console.log(itemsElement);
    
    console.log('....End!')
}