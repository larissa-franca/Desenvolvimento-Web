console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

//Continua apontando para o 1, 2, 3 por que exports é uma variável que aonta para outro objeto,
//entao tanto faz como aponta, no final quem será apontado é o que consta dentro de "module.exports"


