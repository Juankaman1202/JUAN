const express = require('express')

const path = require('path')

const app = express()

const caminho = path.join(__dirname, 'templates')

app.get('/', (resquisicao, resposta) =>{
    resposta.send("Seja bem-vindo ao meu servidor!")
})

app.listen(3000, () =>{
    console.log("servidor rodando na porta 3000")
})

