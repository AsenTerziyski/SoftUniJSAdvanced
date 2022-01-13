let firstName = 'Ivan'
console.log(firstName);

let secondName = 'Ivanov'
console.log(secondName);

let lastName;
console.log(lastName);

console.log(firstName + " " + secondName + "-" + lastName);

lastName = "Ivanchov"

console.log(firstName + secondName + lastName);

const constNumber = 20
console.log(constNumber);

// constNumber - не може да приеме друга стойност защото е константа: Uncaught TypeError: Assignment to constant variable.
// constNumber = 100;
// console.log(constNumber);

console.log(5+10+firstName); // -> 15Ivan
console.log(firstName+5+10); // -> Ivan510
