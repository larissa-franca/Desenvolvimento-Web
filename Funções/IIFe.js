//Função auto invocada
//tudo que criardentro da função fica dentro do escopo local

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()