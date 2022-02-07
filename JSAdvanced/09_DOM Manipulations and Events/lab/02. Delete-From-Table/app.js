function deleteByEmail() {
    console.log('TODO:...');
    let emailInputElement = document.querySelector('input[name="email"]');
    let emailTdElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let emailElementsAsArray = Array.from(emailTdElements);
    let targetEllemetn = emailElementsAsArray.find(x => x.textContent == emailInputElement.value);
    let resultElement = document.getElementById('result');
    if (targetEllemetn) {
        targetEllemetn.parentNode.remove();
        resultElement.textContent = 'Deleted.'
    } else {
        resultElement.textContent = 'Not found.'
    }
}
// targetEllemetn.remove();
// for (const tdElement of emailCellElements) {
//     log.console(tdElement.textContent);
// }