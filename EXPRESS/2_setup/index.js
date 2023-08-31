const express = require('express')

const app = express()

app.get('/', (resquisicao, resposta) =>{
    resposta.send("este é o meu back end")
})

app.listen(3000, () =>{
    console.log("servidor rodando na porta 3000")
})

