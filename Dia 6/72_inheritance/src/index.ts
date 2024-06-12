class Person {
    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number
    ) {        
    }
    greet() {
        console.log('Hi')
    }
}

// Cliente do banco
class Clients extends Person {
    balance() {
        console.log('Your balance is $100')
    }
}

let client1 = new Clients('Andre', 'Silva', 29)
console.log(client1)