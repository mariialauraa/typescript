class Movies {
    // readonly id: number
    // name: string

    constructor(
        public readonly id: number, 
        public name: string, 
        private _price: number
    ) {
        // this.id = id
        // this.name = name
    }
    // Getter para _price
    get price(): number {
        return this._price;
    }
}

let movie1 = new Movies(1, 'Dejavu', 30)
console.log(movie1)