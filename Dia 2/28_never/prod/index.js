"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('The application crashed', 500);
console.log(generateError('The application crashed', 500)); // codigo inacessível detectado.
