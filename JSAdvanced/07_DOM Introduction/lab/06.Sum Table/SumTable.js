function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let sum = Array.from(costElements).reduce((a, el) => {
        let currentElement = Number(el.textContent) || 0;
        return a + currentElement;
    }, 0);

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}