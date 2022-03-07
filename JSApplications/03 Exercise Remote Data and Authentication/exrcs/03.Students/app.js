// console.log('TODO...');
async function solve() {
    console.log("Start........");

    const url = `http://localhost:3030/jsonstore/collections/students`;
    const tableBodyElement = document.querySelector('#results tbody');

    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).forEach(student => {
        console.log(student);
        const firstName = student.firstName;
        const lastName = student.lastName;
        const facultyNumber = student.facultyNumber;
        const grade = Number(student.grade);
        const _id = student._id;

        const tr = document.createElement('tr');
        tr.setAttribute('id', _id);

        const firstNameCell = tr.insertCell(0);
        firstNameCell.innerText = firstName;

        const lastNameCell = tr.insertCell(1);
        lastNameCell.innerText = lastName;

        const facultyNumberCell = tr.insertCell(2);
        facultyNumberCell.innerText = facultyNumber;

        const gradeCell = tr.insertCell(3);
        gradeCell.innerText = grade;

        const deleteBtn = document.createElement('button');
        // deleteBtn.innerText = 'DELL!';
        // deleteBtn.style.width = '100%';
        // deleteBtn.style.color = 'red';
        // deleteBtn.addEventListener('click', deleteStudentInfo);
        // const deleteBtnCell = tr.insertCell(4);
        // deleteBtnCell.appendChild(deleteBtn);

        tableBodyElement.appendChild(tr);

    })

    async function deleteStudentInfo(ev) {
        debugger
        const id = ev.target.parentNode.parentNode.id;
        ev.target.parentNode.parentNode.remove();
        console.log(ev.target.parentNode.parentNode);
        console.log(id);

        const deleteResponse = await fetch(`removedStudentWithId${id}`, { method: 'DELETE', });
    }

    const submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', onClickSubmit);

    async function onClickSubmit(event) {
        //за да не се рефрешва:
        event.preventDefault();

        const firstNameInput = document.getElementsByName('firstName')[0];
        const lastNameInput = document.getElementsByName('lastName')[0];
        const facultyNumberInput = document.getElementsByName('facultyNumber')[0];
        const gradeInput = document.getElementsByName('grade')[0];

        // const inputsArray = document.querySelectorAll('.inputs input');
        // Array.from(inputsArray).map(inp=> {inp.setAttribute('required','')});

        if (firstNameInput.value === '' || lastNameInput.value === ''
            || facultyNumberInput.value === '' || gradeInput.value === '') {
            return alert('Empty fields are not allowed!')
        }

        if (isNaN(gradeInput.value)) {
            return alert("Input is not correct. Grade should be a number. Please try again!");
        }

        const response = await fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        firstName: firstNameInput.value,
                        lastName: lastNameInput.value,
                        facultyNumber: Number(facultyNumberInput.value),
                        grade: Number(gradeInput.value)
                    })
            });

        const tr = document.createElement('tr');

        const firstNameCell = tr.insertCell(0);
        firstNameCell.innerText = firstNameInput.value;

        const lastNameCell = tr.insertCell(1);
        lastNameCell.innerText = lastNameInput.value;

        const facultyNumberCell = tr.insertCell(2);
        facultyNumberCell.innerText = facultyNumberInput.value;

        const gradeCell = tr.insertCell(3);
        gradeCell.innerText = gradeInput.value;

        tableBodyElement.appendChild(tr)

        firstNameInput.value = "";
        lastNameInput.value = "";
        facultyNumberInput.value = "";
        gradeInput.value = "";

        console.log(".........End!");
    }
}
solve();