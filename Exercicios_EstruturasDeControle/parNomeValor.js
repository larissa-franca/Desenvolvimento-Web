const saudacao = 'Opa' //contexto lexico 1

function exec() {
    const saudacao = 'Falaaa' //conteto lexico 2
    return saudacao
}

//Objetos são grupopos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua: Muito Legal',
        numero: 123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)