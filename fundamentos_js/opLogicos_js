//v e v = v
//v e f = f
//f e ? = f)
// o E todos os operandos devem ser verdadeiros

// v ou ? = v
//f ou v = v
// f ou f = f
// no OU se um for v, a sentença é verdadeira

// v xor v = f
// v xor f = v
// f xor v = v
// f xor f = f
// no OU EXCLUSIVO obrigatoriamente os dois te que ser diferentes

//!v = f
//!f = v
// a negação logica !, inverte os valores

//se o trabalho 1 e 2 der certo = comprar tv de 50 polegadas e tomar sorvete
//se so um trabalho vai comprar tv 32 e tomar sorvete
//se  nenhum der certo nem sorvete e nem tv


function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //o OU é representado por ||
    const comprarTV50 = trabalho1 && trabalho2 //o E é representado por &&
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor OU EXCLUSIVO
    const comprarTV32 = trabalho1 != trabalho2 //!= significa diferente que tem a mesma função do ou exclusivo
    const manterSaudavel = !comprarSorvete //operador unario

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))