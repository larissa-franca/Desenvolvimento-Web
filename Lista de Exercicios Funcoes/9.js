function sistemaNotas(nota) {
    let notaArredondada = arredonda(nota)
    if (notaArredondada >= 40) {
        console.log(`Aprovado com nota: ${notaArredondada}`)
    }else { console.log(`Reprovado com nota: ${notaArredondada}`)}
}

function arredonda (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    }else {
        return nota
    }
}

sistemaNotas(89)
sistemaNotas(39)
sistemaNotas(99)
sistemaNotas(27)
sistemaNotas(30)