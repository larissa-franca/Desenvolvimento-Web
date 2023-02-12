console.log(Math.ceil(6.1)) // o ponto é usado para acessar uma função dentro da função Math

const obj1 = {}
obj1.nome = 'Bola' //usando  ponto consegue criar e/ou acessar um atributo dentro do objeto
//obj1['nome'] = 'Bola2'

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
