const express = require('express')
const app = express()


app.use(express.static('public'))

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: app,
    noCache: true
})

// Renderizar index
app.get("/",(req,res)=>{
    return res.render('index.html')
})

// Renderizar pagina de cadastro
app.get("/create-point",(req,res)=>{
    return res.render('create-point.html')
})

// Renderizar resultado de pesquisas
app.get("/search",(req,res)=>{
    return res.render('search-results.html')
})

app.listen(3000,()=>console.log('Rodando na porta 3000'))