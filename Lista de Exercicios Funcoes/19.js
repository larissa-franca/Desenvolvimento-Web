function cardapio(codigo, quantidade) {
    switch (codigo) {
        case '100':
            return 'Cachorro Quente', 3.00 * quantidade
        case '200':
            return 'Hambúrguer Simples', 4.00 * quantidade
        case '300':
            return 'Cheeseburguer', 5.50 * quantidade
        case '400':
            return 'Bauru', 7.50 * quantidade
        case '500':
            return 'Refrigerante', 3.50 * quantidade
        case '600':
            return 'Suco', 2.80 * quantidade
        default:
           return 'Produto não existente'
    }
}
console.log(cardapio('100', 5))
console.log(cardapio('200', 3))
console.log(cardapio('300', 10))
console.log(cardapio('400', 2))
console.log(cardapio('500', 2))
console.log(cardapio('600', 5))
console.log(cardapio('700', 5))
console.log(cardapio('900', 5))