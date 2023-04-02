//Função auto invocada
//Tudo que criar dentro da função fica dentro do escopo local

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()