const tipoDeTriangulo = function(a, b, c) {
    if (a === b && b === c) {
        console.log('Equilatero')
    } else if ((a === b || a === c || b === c) && (a !== b || a !== c || b !== c)) {
        console.log('Isósceles')
    } else if (a !== b && a !== c && b !== c) {
        console.log('Escaleno')
    }
}

tipoDeTriangulo(1, 1, 1)
tipoDeTriangulo(2, 2, 3)
tipoDeTriangulo(1, 2, 3)
tipoDeTriangulo(1, 2, 1)