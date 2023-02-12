function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (min, max) + min
    return Math.floor(valor)
}
let opcao = 0
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima')
//a estrutura while é uma estrutura de repetição em laço que repete até a expressão ser verdadeira