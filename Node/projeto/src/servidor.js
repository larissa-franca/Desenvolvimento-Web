const porta = 3004

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')


app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco:123.45}) //Converte para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
