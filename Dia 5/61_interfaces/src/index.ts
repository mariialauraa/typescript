interface Item {
    name: string
    price: number

    //método
    itemMessage(message: string): void
}

let product1: Item

product1 = {
    name: 'Apple',
    price: 2,
    itemMessage(message: string) {
        console.log(message + ' ' + this.name)
    }
}

product1.itemMessage('You just bought a')