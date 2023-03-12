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