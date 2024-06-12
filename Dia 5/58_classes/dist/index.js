"use strict";
class Users {
    constructor(n, b) {
        this.name = n;
        this.balance = b;
    }
    addMoney(amount) {
        this.balance += amount;
    }
}
const user1 = new Users('Andre', 10);
user1.addMoney(100);
console.log(user1);
const user2 = new Users('Maria', 40);
user2.addMoney(10);
console.log(user2);
