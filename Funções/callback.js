const fabricante = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir)
fabricante.forEach(function(a) {
    console.log(a)
})
fabricante.forEach(fabricante => console.log(fabricante))