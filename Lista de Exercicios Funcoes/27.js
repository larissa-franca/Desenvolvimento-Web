function crianca(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 < taxa2) {
            return 'Criança 1 vai passar criança 2 em 1 ano'
        } else if (taxa1 > taxa2) {
            return 'Criança 2 vai passar criança 1 em 1 ano'
        } else {
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}
function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    return qtdAnos
}
console.log(crianca(110, 2, 120, 5))
console.log(crianca(150, 2, 130, 4));
console.log(crianca(115, 2, 1222, 4))