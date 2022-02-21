class Person {

    static testProperty = 'TestStaticProperty'

    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

    static test (person) {
        return person.toString() + ' => testStatic :) ||||||';
    }

}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

console.log(Person.test(person) + " " + Person.testProperty);