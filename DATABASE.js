let sql=require("mysql2")

let con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"Sowmya@99",
    database:"employee"
})

con.connect(()=>{
    console.log("Database Connected")
})

module.exports=con