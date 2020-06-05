const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('./src/database/database.db')

module.exports = db
// db.serialize(()=>{
// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places(
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             address TEXT,
// //             address2 TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT
// //         );
// //     `)

// //     const query = `
// //         INSERT INTO places (
// //             image,
// //             name,
// //             address,
// //             address2,
// //             state,
// //             city,
// //             items
// //         ) VALUES (?,?,?,?,?,?,?);
// //     `

// //     const values = [
// //         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
// //         "Paperside",
// //         "Guilerme Gemballa, Jardim América",
// //         "Nº 260",
// //         "Santa Catarina",
// //         "Rio do Sul",
// //         "Papéis e papelão"
// //     ]

// //     const afterInsertdata = e=> e? console.log(e) : console.log("Cadastro realizado com sucesso")

// //     db.run(query,values,afterInsertdata)

// //     db.all(`SELECT * FROM places`,(e,rows)=>e?console.log(e):console.log(rows))

   

//     db.run(`DELETE FROM places`,e=>e?console.log(e):console.log('Deleção feita com sucesso'))

// })