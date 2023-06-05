const express =require("express")
const routes= express.Router()

routes.get("/api/chat",(req,res)=>{
    res.send("chats")
})


module.exports={routes}