//ES8 -> Object.values e Object.entries
const obj = { a:1, b: 2, c:3 }
console.log(Object.values(obj)) //imprime apenas o valor
console.log(Object.entries(obj)) // imprime o array chave-valor

//Melhorias na notação literal
const nome = 'Ana'
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}
console.log(new Cachorro().falar())