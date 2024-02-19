function inverso(valor) {
    const tipo = typeof valor 
    if (tipo === 'boolean') {
    return !valor

    } else if (tipo === 'number') {
    return -valor

    } else {
    return `Booleano ou numero esperado, mas o parâmetro é do tipo:  ${tipo}`
    }
}
console.log(inverso(-5))
console.log(inverso('ana'))
console.log(inverso(true))

