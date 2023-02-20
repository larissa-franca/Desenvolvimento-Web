//console.log(global) o FREEZE é colocado para tornar o objeto imutável
global.MinhaApp = Object.freeze ({
    saudacao() {
        return 'Hello world!'
    },
    nome: 'Sistema Legal!'
})