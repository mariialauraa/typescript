interface People {
    name: string
    age: number
}

class Person implements People {
    constructor(public name: string, public age: number) {}
}

const jane = new Person('Jane', 31);

console.log(`${jane.name} is ${jane.age} years old.`);