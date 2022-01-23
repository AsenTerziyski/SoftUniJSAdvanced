let pet = {
    animal: 'cat',
    petName: 'Tom',
    breed: 'siam',
    owner: {
        name: 'Ivan',
        age: 33,
    }
}

console.log(``);
console.log(`${pet.petName} is ${pet.animal} and its owner is 
${pet.owner.name}, age: ${pet.owner.age}!`)

pet.petName = 'Jerry';
pet.animal = 'mouse';
pet.owner.name = 'Peter';

console.log(``);
console.log(`${pet.petName} is ${pet.animal} and its owner is 
${pet.owner.name}, age: ${pet.owner.age}!`)