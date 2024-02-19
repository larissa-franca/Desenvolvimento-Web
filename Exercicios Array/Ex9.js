function par(a, b) {
    let resultado = []
    for (let i = 0; i < a; i++) {
        resultado.push(b)
    }
    return resultado
}
console.log(par(3, 3))