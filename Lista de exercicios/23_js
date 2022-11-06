function notaDoAluno(codigo, notaA, notaB, notaC) {
    let notas = []
    notas.push(notaA)
    notas.push(notaB)
    notas.push(notaC)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = ((notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10)
    console.log(`Código do Aluno: ${codigo}. Notas: ${notaA}, ${notaB}, ${notaC}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
    }

notaDoAluno(07, 2, 4, 8)

