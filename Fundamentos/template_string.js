const nome = 'Larissa'
const concatenacao = 'Olá ' + nome + '!'

const template = ` // simbolo de crase
    Olá 
    ${nome} !`
console.log(concatenacao, template)

//expressoes....

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)