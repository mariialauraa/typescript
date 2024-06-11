function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}

generateError('The application crashed', 500)
console.log(generateError('The application crashed', 500)) // codigo inacessível detectado.