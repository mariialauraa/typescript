"use strict";
class Movies {
    constructor(id, name, _price) {
        this.id = id;
        this.name = name;
        this._price = _price;
    }
    get price() {
        return this._price;
    }
}
let movie1 = new Movies(1, 'Dejavu', 30);
console.log(movie1);
