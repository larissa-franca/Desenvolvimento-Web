function maiorMenor(vetor){
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if(maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(maiorMenor(vetor))