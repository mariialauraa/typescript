class Movies {
    readonly id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

let movie1 = new Movies(1, 'Dejavu')
//movie1.id = 7 // não é possível mudar apenas ler
console.log(movie1)

console.log(movie1.id)