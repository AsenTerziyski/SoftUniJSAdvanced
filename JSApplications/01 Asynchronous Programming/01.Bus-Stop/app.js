async function getInfo() {
    // console.log("TODO...");
    console.log('START....');
    const stopNameElement = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses');

    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    console.log(url);

    try {
        stopNameElement.textContent = 'Please wait. Loading...'
        // timeTableElement.replaceChildren(); // зачистваме за да не се наслагват!
        timeTableElement.innerHTML = '';
        const res = await fetch(url);

        if (res.status !== 200) {
            // alert('Not valid stop ID!')
            throw new Error();
        }

        const data = await res.json();
        stopNameElement.textContent = data.name;

        Object
            .entries(data.buses)
            .forEach(bus => {
                const liElement = document.createElement('li');
                let busId = bus[0];
                let busTime = bus[1];
                liElement.textContent = `Bus ${busId} arrives in ${busTime} minutes`;
                timeTableElement.appendChild(liElement);
            });

    } catch (error) {
        stopNameElement.textContent = 'Error';
    } finally {
        console.log('.....END!');
    }
}

// function getInfo() {
//     let submitBtn = document.getElementById('submit');
//     let busList = document.getElementById('buses');
//     let stop = document.getElementById('stopName');
    
//     submitBtn.addEventListener('click', () => {
//         let idVal = document.getElementById('stopId').value;
//         let url = `http://localhost:3030/jsonstore/bus/businfo/${idVal}`;
 
 
//         fetch(url)
//             .then(data => data.json())
//             .catch(err => {stop.textContent = 'Error'})
//             .then(data => {
//                 stop.textContent = '';
//                 busList.innerHTML = '';
//                 stop.textContent = data.name;
//                 for (entry in data.buses) {
//                     let listEl= document.createElement('li');
//                     listEl.textContent = `Bus ${entry} arrives in ${data.buses[entry]} minutes`
//                     busList.appendChild(listEl);
//                 }
 
//             })
//             // Not sure if this catch is needed, but want to make sure that we don't have invalid entry in bus.json
//             .catch(err => {stop.textContent = 'Error'})
 
 
//     })
// }