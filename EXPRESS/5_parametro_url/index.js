const express = require('express')
const path = require('path')

const app = express()

const caminho = path.join(__dirname, 'templates')

app.get('/usuarios', (resquisicao, resposta) =>{
    resposta.sendFile(`${caminho}/usuarios.html`)
})

app.get('/:id', (resquisicao, resposta) =>{
    const id = resquisicao.params.id
    console.log(`O usuario  ${id} esta desaparecido`)

    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () =>{
    console.log("servidor rodando na porta 3000")
})