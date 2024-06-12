class Users {
    name: string
    private balance: number = 0

    constructor(n: string, b: number) {
        this.name = n
        this.balance = b
    }

    addMoney(amount: number) {
        this.balance += amount
    }
}

const user1 = new Users('Andre', 10)

// A propriedade 'balance' é private e somente é acessível na classe 'Users'.
//user1.balance = 500 

user1.addMoney(100)
console.log(user1)

const user2 = new Users('Maria', 40)
user2.addMoney(10)
console.log(user2)