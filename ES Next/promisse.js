//estrutura que tem por objetivo representar uma operação assincrona, pode ser atendida ou rejeitada

function falarDepoisDe(segundos, frase) {
    return new Promisse((resolve, reject) => {
        setTimeout (() => {
            resolve(frase)
        }, segundos * 1000)
    })
}