const porta = 3004

const express = require('express')
const app = express()

app.post('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco:123.45}) //Converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})
