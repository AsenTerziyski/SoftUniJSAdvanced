// 1. For of
let cars = ['bMW', 'FoRd', 'oPEL', 'xxLADA', '00xCar'];
// forof
for (const car of cars) {
    console.log(car);
}

// 2. foreach
cars.forEach((c) => console.log(c));

// 3. some
let result = cars.some(c => c[0] == 'F');
console.log(result);

// 4. find - връща първото намерено - raboti kato firstOrUndefined 
result = cars.find(c => c.length >= 4);
console.log(result);

// 5. filter
let fourLetterCars = cars.filter((car) => car.length == 4);
console.log(fourLetterCars);

// 6. map
let arr = [1, 2, 3];
result = arr.map(n => Number(Math.sqrt(n).toFixed(2)));

console.log(arr);
console.log(result);

let upperCaseCars = cars.map(car => car.toUpperCase());
console.log(upperCaseCars);

// 7.reduce
let sum = arr.reduce((a, b) => a + b);
console.log(sum);

let test = arr.reduce((a, b) => a / b);
console.log(test);

test = arr.reduce((a, b) => a * b);
console.log(test);

test = arr.reduce((a, b) => a + a * b);
console.log(test);
