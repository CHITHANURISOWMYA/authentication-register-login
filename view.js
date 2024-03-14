var express=require("express")
var app=express()

var router=require("./mvc/routes")

app.use(express.json())

app.use("/users",router)


app.listen(3003,()=>{
    console.log("success")
})
