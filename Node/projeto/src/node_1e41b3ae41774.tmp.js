const porta = 3003 

const express = require('express')
const app = express()

app.get('/proutos', (req, rs, next) => {
    resizeBy.send({ nome: 'Notebook', preco:123.45}) //converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
