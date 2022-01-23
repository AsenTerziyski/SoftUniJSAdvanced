function produceCar(inputOrder) {

    let resultCar = {};
    let resultEngine = {};
    let resultCarriege = {};

    if (inputOrder.power <= 90) {
        resultEngine.power = 90;
        resultEngine.volume = 1800;
    } else if (inputOrder.power <= 120) {
        resultEngine.power = 120;
        resultEngine.volume = 2400;
    } else if (inputOrder.power <= 200) {
        resultEngine.power = 200;
        resultEngine.volume = 3500;
    }

    resultCar.model = inputOrder.model;
    resultCarriege.type = inputOrder.carriage;
    resultCarriege.color = inputOrder.color;

    if (inputOrder.wheelsize % 2 == 0) {
        inputOrder.wheelsize--;
    }

    resultCar.engine = resultEngine;
    resultCar.carriage = resultCarriege;

    resultCar.wheels = [];
    for (let i = 0; i < 4; i++) {
        resultCar.wheels.push(inputOrder.wheelsize);
    }
    return resultCar;

}

console.log(JSON.stringify(produceCar(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
)));