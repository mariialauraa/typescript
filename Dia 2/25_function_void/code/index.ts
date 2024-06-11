function add(num1: number, num2: number) {
    return num1 + num2
}

// Função void = sem return
function result(price: number) {
    console.log('The result is ' + price)
}

result((add(5, 6)))