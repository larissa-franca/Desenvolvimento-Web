function criarProd1(nome, preco, cor, marca) {
    return {
        nome,
        preco,
        cor,
        marca,
        desconto: 0.1
    }
}
console.log(criarProd1('borracha', 1.00, 'branca', 'faber castel'))