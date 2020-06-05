const express = require('express')
const app = express()
const db = require('./database/db')


app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))

const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: app,
    noCache: true
})

// Renderizar index
app.get("/",(req,res)=>res.render('index.html'))

// Renderizar pagina de cadastro
app.get("/create-point",(req,res)=>{
    return res.render('create-point.html')
})

app.post("/savepoint",(req,res)=>
    db.run(`INSERT INTO places(
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES(?,?,?,?,?,?,?)`,
    [
        `${req.body.image}`,
        `${req.body.name}`,
        `${req.body.address}`,
        `${req.body.address2}`,
        `${req.body.state}`,
        `${req.body.city}`,
        `${req.body.items}`
    ],
    e=>e?res.send(e):res.render('create-point.html',{saved:true}))
)

// Renderizar todos os pontos cadastrados
app.get("/search",  
(req,res)=>req.query.search==""?res.render("search-results.html",{points:0})
:db.all(`SELECT * FROM places WHERE city LIKE '%${req.query.search}%'`,
(e,rows)=>e?console.log(e):res.render('search-results.html',{points:rows})))



app.listen(3000,()=>console.log('Rodando na porta 3000'))