"use strict";
let product1;
product1 = {
    name: 'Apple',
    price: 2,
    itemMessage(message) {
        console.log(message + ' ' + this.name);
    }
};
product1.itemMessage('You just bought a');
