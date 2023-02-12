const pilotos = ['Vettel', 'Alonso', 'Senna', 'Massa']
pilotos.pop() //remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift() //remove o primeiro elemento

pilotos.unshift('Hamilton') //adiciona elementos
console.log(pilotos)

const agunsPilotos1 = pilotos.slice(2) //novo array //o slice pega um pedaço do array
console.log(agunsPilotos1)