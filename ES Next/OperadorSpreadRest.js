// operador ... rest(juntar)/Spread(espalhar)

//usar rest com parâmetro de função
//operador rest - permite que uma função receba um número indefinido de parâmetros 

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += 0)   
    return total 
}
console.log(total(2, 3, 4, 5))

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12345.99 }
const clone = { ativo: true, ...funcionario }//colocando os ...espalha os atributos de um objeto no outro
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Maria', 'Pedro']
const grupoFinal = ['Glória', ...grupoA, 'Rafa']
console.log(grupoFinal)
