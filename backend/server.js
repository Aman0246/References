const express=require("express")
const app=express()
const cors=require("cors")
require("./Mongoose/mongoConnect")
require('dotenv').config()

const {routes}=require("./Routes/router")

//===================================================================================================================
app.use(cors({
  credentials:true,
  origin:"http://localhost:3000"  
}))
//===================================================================================================================
app.use(express.json())
app.use("/",routes) 

PORT=7000
app.listen(PORT,()=>{
    console.log(`server is running at localhost=>${PORT}..........................`)
});


