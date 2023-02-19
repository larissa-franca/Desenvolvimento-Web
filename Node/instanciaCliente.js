const contadorA = require('./instanciaUnica.js')
const contadorB = require('./instanciaNova.js')

const contadorC = require('./instanciaNova.js')()
const contadorD = require('./instanciaNova.js')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)