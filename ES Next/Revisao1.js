//let e const = palavras reservadas para determinar variáveis
//let tem escopo de bloco e o var tem escopo de função ou escopo global

{
    var a = 2
    let b = 3
    console.log(b)//colocando dentro do bloco eu consigo ler
}
console.log(a) // não tem escopo de bloco
//console.log(b)// não consegue let a variável b, por que é LET e 
// tem escopo de bloco

//TEMPLATE STRING
const produto = 'Ipad'
console.log(`${produto}
é
caro!`)

//DESTRUCTURE
const [l, e, ... tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9}
console.log(i, nome)