function attachEvents() {
    console.log('START!......');

    const url = `http://localhost:3030/jsonstore/phonebook`;

    const ul = document.getElementById('phonebook');
    
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    const personInputElement = document.getElementById('person');
    const phoneInputElement = document.getElementById('phone');

    loadBtn.addEventListener('click', onLoadClick);
    createBtn.addEventListener('click', onClickCreate);

    async function onLoadClick() {
        console.log('OnLoadFunctionStarted!')
        ul.innerHTML = '';
        // ul.replaceChildren();
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        // Object.values(data).forEach(d=>console.log(d));
        Object
            .values(data)
            .forEach(d => {
                const { person, phone, _id } = d;

                const liElement = createElement('li', `${person}: ${phone}`, ul);
                liElement.setAttribute('id', _id);

                const deleteBtn = createElement('button', 'Delete', liElement);
                deleteBtn.setAttribute('id', 'deleteBtn');
                deleteBtn.addEventListener('click', onClickDelete);
            })

    }

    async function onClickDelete(event) {
        console.log('Delete function started!')
        const idToDelete = event.target.parentNode.id;
        //махаме го от html:
        event.target.parentNode.remove();

        const deleteResponse = await fetch(`${url}/${idToDelete}`, {
            method: 'DELETE'
        })
        console.log(idToDelete);
        console.log(`Deleted phone record with id ${idToDelete}!`)
    }

    async function onClickCreate() {
        console.log('Created started!')
        if (person.value === '' || phone.value === '') {
            alert('Empty fields are not alowed!')
        } else {
            const response = await fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ person: person.value, phone: phone.value })
                });
            // ul.innerHTML = '';
            loadBtn.click();
            personInputElement.value = '';
            phoneInputElement.value = '';
            console.log('Created passed!')
        }
    }

    function createElement(type, text, appender) {
        const resultElement = document.createElement(type);
        resultElement.textContent = text;
        // appender e парент елемента, където ще добавяме резълтЕлемента:
        appender.appendChild(resultElement);
        return resultElement;
    }

    console.log('..........END');
}

attachEvents();