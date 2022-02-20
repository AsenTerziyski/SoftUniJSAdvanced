window.addEventListener('load', solution);

function solution() {
  // console.log('TODO: Write the missing functionality!');

  const submitBtnElement = document.getElementById('submitBTN');
  const editBtnElement = document.getElementById('editBTN');
  const continueBtnElement = document.getElementById('continueBTN');
  const blockElement = document.getElementById('block');
  const preview = document.getElementById('infoPreview')

  // submitBtnElement.disabled = false;
  // editBtnElement.disabled = true;
  // continueBtnElement.disabled = true;

  // вземам инпут полетата
  const inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
  //махам инпут бутона от инпутите
  inputValues.pop();

  // вземам лейбъл полетата
  const lableValues = Array.from(document.getElementById('form').querySelectorAll('label'));

  submitBtnElement.addEventListener('click', (event) => {
    //таргет е самият бутон!!!
    console.log(event.target);

    const fullName = inputValues[0];
    const email = inputValues[1];

    if (fullName.value && email.value !== '') {
      for (let i = 0; i < inputValues.length; i++) {
        const liElement = document.createElement('li');
        let currentLabelValue = lableValues[i].textContent;
        let currentInputValue = inputValues[i].value;
        liElement.textContent = `${currentLabelValue} ${currentInputValue}`;
        preview.appendChild(liElement);
      }
      //изчистване на инпут полето
      for (let inp of inputValues) {
        inp.value = '';
      }
    }
    event.target.disabled = true;
    editBtnElement.disabled = false;
    continueBtnElement.disabled = false;
  })

  editBtnElement.addEventListener('click', () => {
    const listItems = Array.from(preview.childNodes);
    for (let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = listItems[i].textContent.split(': ')[1];
      listItems[i].remove();
    }
    submitBtnElement.disabled = false;
    editBtnElement.disabled = true;
    continueBtnElement.disabled = true;
  })

  continueBtnElement.addEventListener('click', (ev) => {
    blockElement.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    blockElement.appendChild(h3);
  })

}

function solution() {
  let nameField = document.querySelector('#fname');
  let mailField = document.querySelector('#email');
  let phoneField = document.querySelector('#phone');
  let adressField = document.querySelector('#address');
  let postalField = document.querySelector('#code');

  let submitButton = document.querySelector('#submitBTN');

  let previewBox = document.querySelector("#infoPreview");

  //let actions = document.querySelector('.actions');
  let block = document.querySelector('#block');


  submitButton.addEventListener('click', (event) => {

      if (!nameField.value || !mailField.value) {
          return;
      }

      let name = nameField.value;
      let mail = mailField.value;
      let phone = phoneField.value;
      let address = adressField.value;
      let postal = postalField.value;

      let nameLI = document.createElement('li');
      nameLI.textContent = `Full Name: ${name}`;

      let mailLI = document.createElement('li');
      mailLI.textContent = `Email: ${mail}`;

      let phoneLI = document.createElement('li');
      phoneLI.textContent = `Phone Number: ${phone}`;

      let addressLI = document.createElement('li');
      addressLI.textContent = `Address: ${address}`;

      let postalLI = document.createElement('li');
      postalLI.textContent = `Postal Code: ${postal}`;

      previewBox.appendChild(nameLI)
      previewBox.appendChild(mailLI);
      previewBox.appendChild(phoneLI);
      previewBox.appendChild(addressLI);
      previewBox.appendChild(postalLI);

      nameField.value = '';
      mailField.value = '';
      phoneField.value = '';
      adressField.value = '';
      postalField.value = '';
      event.target.disabled = true; //disables submit button

      let editButton = document.querySelector('#editBTN');
      let continueButton = document.querySelector('#continueBTN');

      editButton.disabled = false;
      continueButton.disabled = false;

      editButton.addEventListener('click', (event) => {
          
          submitButton.disabled = false;
          editButton.disabled = true;
          continueButton.disabled = true;

          previewBox.removeChild(nameLI)
          previewBox.removeChild(mailLI);
          previewBox.removeChild(phoneLI);
          previewBox.removeChild(addressLI);
          previewBox.removeChild(postalLI);

          nameField.value = name;
          mailField.value = mail;
          phoneField.value = phone;
          adressField.value = address;
          postalField.value = postal;
      });

      continueButton.addEventListener('click', (event) => {
          block.innerHTML = '';
          let h3 = document.createElement('h3');
          h3.textContent = `Thank you for your reservation!`;
          block.appendChild(h3);
      });
  });
}