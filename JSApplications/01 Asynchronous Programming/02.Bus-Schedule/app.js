function solve() {

    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {next:'depot'};

    async function depart() {
        console.log('start depart function.....');
        departBtn.disabled = true;
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const result = await fetch(url)
        
        if (result.status !== 200) {
            label.textContent = `Error`;
            arriveBtn.disabled = true;
            departBtn.disabled = true;
            alert('Wrong data!');
        }
        
        stop = await result.json();
        label.textContent = `Next stop ${stop.name}`;
        arriveBtn.disabled = false;
        console.log('........end depart function');
    }

    function arrive() {
        console.log('start arrive function.....');
        label.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        console.log('........end arrive function');
    }

    return {
        depart,
        arrive
    };
}

let result = solve();