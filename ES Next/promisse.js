//estrutura que tem por objetivo representar uma operação assincrona, pode ser atendida ou rejeitada

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //se usa para tratar um erro, no reject