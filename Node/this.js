console.log(this === global) // o this não aponta para global e sim para module.exports
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)