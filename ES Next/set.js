//Estrutura não indexada, que não aceita repetição.
const time = new Set()
time.add('Vasco')
time.add('São Paulo').add('Palmeiras').add('Corintians')
time.add('Flamengo')
time.add('Vasco')

console.log(time)
console.log(time.size)
console.log(time.has('Vasco'))
console.log(time.has('Vasco'))
time.delete('Flamengo')
console.log(time.has('Flamengo'))