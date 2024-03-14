

const express=require("express")
let {registeruser}=require("./controller")
let router=express.Router()


router.post("/",registeruser)


module.exports=router

