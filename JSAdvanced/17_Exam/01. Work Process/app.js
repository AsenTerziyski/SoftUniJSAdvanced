function solve() {

    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');
    let tbodyElement = document.getElementById('tbody');

    let totalSum = 0;

    let addWorkerButtonElement = document.getElementById('add-worker');
    addWorkerButtonElement.addEventListener('click', addInputInfo);

    function addInputInfo(e) {
        e.preventDefault();

        if (firstNameElement.value == ''
            || lastNameElement.value == ''
            || emailElement.value == ''
            || birthElement.valuet == ''
            || positionElement.value == ''
            || salaryElement.value == '') {
            return;
        }


        let trElement = document.createElement('tr');

        let tdFirstName = document.createElement('td');
        let tdLastName = document.createElement('td');
        let tdEmail = document.createElement('td');
        let tdBirth = document.createElement('td');
        let tdPosition = document.createElement('td');
        let tdSalary = document.createElement('td');

        let tdAction = document.createElement('td');

        let firedButton = document.createElement('button');
        firedButton.textContent = 'Fired'
        firedButton.classList.add('fired')
        let editButton = document.createElement('button');
        editButton.textContent = 'Edit'
        editButton.classList.add('edit')

        tdAction.appendChild(firedButton);
        tdAction.appendChild(editButton);


        tdFirstName.textContent = firstNameElement.value;
        tdLastName.textContent = lastNameElement.value;
        tdEmail.textContent = emailElement.value;
        tdBirth.textContent = birthElement.value;
        tdPosition.textContent = positionElement.value;
        tdSalary.textContent = salaryElement.value;

        trElement.appendChild(tdFirstName);
        trElement.appendChild(tdLastName);
        trElement.appendChild(tdEmail);
        trElement.appendChild(tdBirth);
        trElement.appendChild(tdPosition);
        trElement.appendChild(tdSalary);
        trElement.appendChild(tdAction);

        tbodyElement.appendChild(trElement);

        let currentSum = Number(salaryElement.value);
        totalSum = totalSum + currentSum;


        firedButton.addEventListener('click', (e) => {
            let currentSalary = tdSalary.textContent;
            console.log(totalSum);
            totalSum = totalSum - Number(currentSalary)
            console.log(totalSum)
            trElement.remove();
            spanElement.textContent = totalSum.toFixed(2);
        })

        let spanElement = document.getElementById('sum');
        spanElement.textContent = totalSum.toFixed(2);

        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        birthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

    }

}
solve()