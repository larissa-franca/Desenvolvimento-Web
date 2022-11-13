var vetorInteiro = [1, 2, 3, 4]
var vetorString = ['Bala', 'Chiclete', 'Bombom', 'Chocolate']
var vetorDouble = [0.50, 0.80, 1.50, 3.00]

a = vetorInteiro.concat(vetorString[1], vetorDouble[1])
b = vetorInteiro[1] + ' ' + vetorString[1] + ' ' + vetorDouble[1]

console.log(b)
console.log(a)

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}
console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))