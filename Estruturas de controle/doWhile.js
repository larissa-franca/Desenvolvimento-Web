function getInteiroAlatorioEntre(min, max) {
    const valor = Math.random() * (max - min) - min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAlatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}. `)
} while (opcao != -1)

console.log('Até a próxima!')
//Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável.