
function conceitoNota(notas){
    let conceitos = []
    for (let i = 0; i <notas.length; i++){
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>= 5 && notas[i]<= 6.9){
            conceitos.push('C')
        } else if(notas[i]>= 7 && notas[i]<= 8.9){
            conceitos.push('B')
        } else if(notas[i]>= 9 && notas[i]<= 10){
            conceitos.push('A')
        }
    } 
    return conceitos
}
let notas = [4.8, 5.5, 6.8, 7.0, 8.0, 9.0, 10]
let vetorConceitos = conceitoNota(notas)

console.log(vetorConceitos)
