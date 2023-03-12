//let e const = palavras reservadas para determinar variáveis
//let tem escopo de bloco e o var tem escopo de função ou escopo global

{
    var a = 2
    let b = 3
}
console.log(a) // não tem escopo de bloco
console.log(b)// não consegue let a variável b, por que é LET e 
// tem escopo de bloco
