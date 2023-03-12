//Arrow function: tem uma sintaxe mais reduzida e é sempre anonima
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
//nesse caso a função arrow foi escrita diretamente dentro do módulo ou dentro de um arquivo no node
//sgnifica que o this sempre irá apontar para o exports ou para o module.exports
//o this sempre apontará para esse objeto
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
// em cima de um atributo de uma função, define o valor padrão para ele
function log(texto = 'Node') {
    console.log(texto)
}
log()
log(undefined)
log('Sou mais forte!')

//operador rest

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += 0)   
    return total 
}
console.log(total(2, 3, 4, 5))
