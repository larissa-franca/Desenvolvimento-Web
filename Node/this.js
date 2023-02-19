console.log(this === global) // o this não aponta para global e sim para module.exports
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função ... ')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}
logThis()

//dentro de uma função o this aponta para global