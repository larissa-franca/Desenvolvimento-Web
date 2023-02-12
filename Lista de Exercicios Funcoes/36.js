let vetor = [1, 2, 3, 4, 5]
function recebePrimeiro(vetor, multiplicador){
   let vetorResultado1 = []
   vetor.forEach(elemento => {
    vetorResultado1.push(elemento * multiplicador)
    })
    return vetorResultado1
  
}

function multiplicaSeMaior5(vetor, multiplicador){
    let vetorResultado2 = []
    if(multiplicador < 5) return 
    vetor.forEach(elemento => {
        vetorResultado2.push(elemento * multiplicador)
    })
    return vetorResultado2

}
console.log(recebePrimeiro(vetor, 3))
console.log(multiplicaSeMaior5(vetor, 5))