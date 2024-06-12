class Person {
    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number
    ) {        
    }
    get greet() {
        return this.firstName + ' ' + this.lastName
    }
}

// Cliente do banco
class Clients extends Person {
    override get greet() {
        return 'Dear ' + super.greet
    }
}

// Funcionario do banco
class Staff extends Person {
    override get greet() {
        return 'Hi ' + super.greet
    }
}

let client1 = new Clients('Andre', 'Silva', 29)
console.log(client1.greet)

let staff1 = new Staff('Maria', 'Melo', 32)
console.log(staff1.greet)