console.log("teste app.js")

function productPrice(price: number, currency: string) {
    if (price > 20) {
        return price
    }
    return // avisa que falta esse return
}

// Nem todos os caminhos de código retornam um valor.
// "noImplicitReturns": true