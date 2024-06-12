"use strict";
class Movies {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let movie1 = new Movies(1, 'Dejavu');
console.log(movie1);
console.log(movie1.id);
