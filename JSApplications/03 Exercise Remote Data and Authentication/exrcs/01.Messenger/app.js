const url = `http://localhost:3030/jsonstore/messenger`
let messages = document.getElementById('messages');



function attachEvents() {
    console.log('TODO...');
    document.getElementById('submit').addEventListener('click', postMessage);
    document.getElementById('refresh').addEventListener('click', loadAllMessages);
}

async function postMessage() {
    // const [author, content] = [document.getElementById('author'), document.getElementById('content')];
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]');
    // debugger

    if (author.value === '' || content.value === '') {
        alert('Fileds are required!')
    } else {
        await request(url, { author: author.value, content: content.value });
        messages.value += `${author.value} : ${content.value}` + '\n';
        author.value = '';
        content.value = '';
    }

}

async function loadAllMessages() {
    const resp = await fetch(url);
    const data = await resp.json();
    messages.value = Object.values(data)
        .map(({ author, content }) => `${author} : ${content}`)
        .join('\n');
}

async function request(url, option) {
    if (option) {
        option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(option)
        }
    }
    const response = await fetch(url, option);
    return response.json();

}
attachEvents();