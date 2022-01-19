
// 1. POP - removes the last element from array:
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
console.log('1. POP');
let cars = ['bMW', 'FORD', 'xLADA', '00Car']
console.log(cars);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

let lastCar = cars.pop();
console.log(lastCar);
console.log(cars);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
cars[cars.length] = lastCar;
console.log(cars);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx')


// 2. PUSH - adds new ellement(s) at the end of the array:
console.log('2. PUSH');
cars.push(' Honda');
console.log(cars);
cars.push('Suzuki', 'TestCar');
console.log(cars);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');


// 3. SHIFT - removes first ellement:
console.log('3. SHIFT');
cars.shift();
console.log(cars);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');


// 4. UNSHIFT adds element and moves others elements one position up:
console.log('4. UNSHIFT');
cars.unshift('Test Car 2');
console.log(cars);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

// 5. SPLICE:
console.log('5. SPLICE');
cars.splice(1,0,'TestSpliceCar');
console.log(cars);

cars.splice(3,0,'TestSpliceCar2', 'TestSpliceCar2');
console.log(cars);

let deletedCar = cars.splice(6,1);
console.log(deletedCar);
console.log(cars);

let deletedCars = cars.splice(3,2, 'TestCar100');
console.log(deletedCars);
console.log(cars);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

// 6. FILL:
console.log('6. FILL');
cars.fill('XXXCar',2,4);
console.log(cars);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

// 7. REVERSE
console.log('7. REVERSE');
cars.reverse();
console.log(cars);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');   

// 8. SORT - sots by ascцi table number! не по азбучен ред
console.log('7. SORT');
cars.sort();
console.log(cars);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');  

// да се внимава със сорт, сортира по номер в аски тблицата
console.log([10,3,1,9].sort());

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'); 
let numbers = [1,3,100,78,2,1500];
console.log(numbers);
numbers.sort(function(a,b){
    if (a < b) {
        return -1;
    } else if (a>b) {
        return 1
    } else {
        return 0;
    }
});
console.log(numbers)
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'); 

let numbers2 = [1,3,100,78,2,1500,33,20,2588888];
console.log(numbers2)
numbers2.sort((a,b) => {return b-a});
console.log(numbers2);

numbers2.sort((a,b) => a-b);
console.log(numbers2);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

console.log(cars);
cars.sort((a,b) => b.localeCompare(a));
console.log(cars);
