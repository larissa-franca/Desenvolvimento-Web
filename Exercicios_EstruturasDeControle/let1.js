var numero = 1
{
    let numero = 2
    console.log("dentro =", numero)
}
console.log('fora =', numero)
//os dois valores coexistem por que não fazem parte do mesmo escopo
//variaveis definidas com a palavra reservada VAR tem escopo global e escopo de função
//variaveis definidas com a palavra reservada LET tem escopo global, escopo de função e escopo de bloco
