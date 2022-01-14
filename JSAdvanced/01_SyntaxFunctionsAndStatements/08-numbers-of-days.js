
function numbersOfDayInMonth(month, year) {
    daysInMonth = new Date(year, month, 0).getDate();
    return daysInMonth;
}

let result = numbersOfDayInMonth(1, 12);
console.log(result);

result = numbersOfDayInMonth(2, 2022);
console.log(result);