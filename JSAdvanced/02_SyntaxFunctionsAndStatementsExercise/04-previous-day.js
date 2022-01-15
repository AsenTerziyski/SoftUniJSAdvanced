
function getPreviousDay(year, month, day) {
    let dateInput = `${year}-${month}-${day}`;
    let date = new Date(dateInput);
    //тук променям датата с един ден назад:
    //date.getDate() - деня.
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

getPreviousDay(2012, 6, 1);