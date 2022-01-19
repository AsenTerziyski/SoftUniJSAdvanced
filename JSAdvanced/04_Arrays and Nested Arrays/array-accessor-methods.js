
// concat methodite ne promenyat originalniya masiv

let testArray = ['bmv', 'ford', 'lada'];
let testArray2 = ['bmv1', 'ford1', 'lada1'];

// 1. join
let outputString = testArray.join(', => ');
console.log(outputString);

// 2. concat
let resultArr = testArray.concat(testArray2.reverse());
console.log(resultArr);

// 3. slice - този метод не е мутиращ! 4-> ne se vkluchva
let slicedCars = resultArr.slice(2,4);
console.log(slicedCars);
let clonedCars = resultArr.slice(); // => nachin za klonirane na masivi
console.log(clonedCars);

console.log(clonedCars==resultArr);

// 4. Includes
let isAvaible = slicedCars.includes('lada');
console.log(isAvaible);

// 5. IndexOf
console.log(slicedCars.indexOf('lada1'));
console.log(slicedCars.indexOf('ladaxxx'));



