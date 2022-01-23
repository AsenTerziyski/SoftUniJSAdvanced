let phoneBook = {
    'Ivan Ivanov': 333333,
    'Petar Petrov': 444444,
    Testcho: 7777,
    person1: 1000000,
    'Petar Petrov': 'xxxxxxxxxxx',
}

let count = 0;
for (key in phoneBook) {
    count++;
    console.log(`${count}. ${key} has phone number ${phoneBook[key]};`);
}

let names = Object.keys(phoneBook);
let phoneNumbers = Object.values(phoneBook);

console.log(names);
console.log(phoneNumbers);

let entries = Object.entries(phoneBook);
console.log(entries);

for (const [key, value] of entries) {
    console.log(key + "-" + value);    
}