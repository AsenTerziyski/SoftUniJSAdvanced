function colorize() {

    // 1:
    // let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');
    // rowElements.forEach(x => {
    //     x.style.backgroundColor = 'teal';
    // });

    // 2:
    let rowElements = document.querySelectorAll('tr');
    let rows = Array.from(rowElements);
    rows.forEach((tablerow, i) => 
    {
        if (i % 2 !== 0) {tablerow.style.backgroundColor = 'teal'}
    }
    );
};