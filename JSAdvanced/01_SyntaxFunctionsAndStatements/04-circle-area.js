
function findCircleArea(diameter) {

    let area;
    let inputType = typeof (diameter);

    if (inputType === 'number') {
        area = Math.pow(diameter, 2) * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

findCircleArea(10);
findCircleArea('test');