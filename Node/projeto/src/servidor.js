const porta = 3004

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')


app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco:123.45}) //Converte para JSON
})

app.get('/produtos/:id', ())

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
