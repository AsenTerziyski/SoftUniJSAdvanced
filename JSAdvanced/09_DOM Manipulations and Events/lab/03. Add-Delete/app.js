function addItem() {

    let itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    //зачиствам полето:
    inputElement.value = '';


    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[DELETE]';

    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    });


    // важно е в какво последователност се добавят (апендват)!
    liElement.appendChild(deleteElement)
    itemsElement.appendChild(liElement);

}