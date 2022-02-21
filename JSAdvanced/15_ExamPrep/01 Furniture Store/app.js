window.addEventListener('load', solve);

function solve() {
    console.log('Start.....');
    debugger

    const furnitureListElement = document.getElementById('furniture-list');

    const addBtnElement = document.getElementById('add');

    const modelInputElement = document.getElementById('model')
    const yearInputElement = document.getElementById('year')
    const descriptionInputElement = document.getElementById('description')
    const priceInputElement = document.getElementById('price');

    addBtnElement.addEventListener('click', addClickHandler);
    function addClickHandler(e) {
        // console.log('clicked!');
        //за да не изчезва след клик:
        e.preventDefault();

        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);

        // if (!modelInputElement.value || !descriptionInputElement.value) {
        //     return;
        // }

        // if (year <= 0 || price <= 0) {
        //     return;
        // }

        // table row - tr
        let rowElement = document.createElement('tr');

        // table data - td
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td')
        let actionsCellElement = document.createElement('td');

        // button elements:
        let infoBtnElement = document.createElement('button');
        let buyBtnElement = document.createElement('button');

        // add text content to button elements:
        infoBtnElement.textContent = 'More Info';
        buyBtnElement.textContent = 'Buy it';

        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');

        let totalPriceElement = document.querySelector('.total-price')

        // more info Btn add event Listener:
        infoBtnElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent === 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less info'
            } else {
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        })

        infoBtnElement.classList.add('moreBtn');
        buyBtnElement.classList.add('buyBtn')
        buyBtnElement.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price
            totalPriceElement.textContent = totalPrice.toFixed(2);
            rowElement.remove();
            contentsRowElement.remove();
        })

        // append button elements to actionCellElement:
        actionsCellElement.appendChild(infoBtnElement);
        actionsCellElement.appendChild(buyBtnElement);

        // попълвам клетките
        modelCellElement.textContent = modelInputElement.value;
        // round price
        priceCellElement.textContent = price.toFixed(2);

        // добавям клас към роу елемент:
        rowElement.classList.add('info');
        // добавям ги към роу
        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);

        // добавям роу към furniture element
        furnitureListElement.appendChild(rowElement);

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${descriptionInputElement.value}`;



        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none'

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitureListElement.appendChild(contentsRowElement);

        console.log('Finched clickEventHandlerclicked!');
    }
    console.log('..........End');
}
