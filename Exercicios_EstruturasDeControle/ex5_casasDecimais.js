function dinheiro(a){
    console.log(`R$ ${(a.toFixed(2)).toString().replace('.', ',')}`)
}
dinheiro(0.300000000004)
//toFixed - fixa as casas decimais
//toString - resultar em um texto que expresse o que é esse objeto
//replace - retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere