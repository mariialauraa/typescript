"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Clients extends Person {
    get greet() {
        return 'Dear ' + super.greet;
    }
}
class Staff extends Person {
    get greet() {
        return 'Hi ' + super.greet;
    }
}
let client1 = new Clients('Andre', 'Silva', 29);
console.log(client1.greet);
let staff1 = new Staff('Maria', 'Melo', 32);
console.log(staff1.greet);
