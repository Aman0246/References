//backend
const express=require("express")
const app=express()
const cors=require("cors")
require('dotenv').config()
require("./mongoconnect/mongoConn")
const {routes}=require("./routes/routes")
//===================================================================================================================
app.use(cors({
  credentials:true,
  origin:"http://localhost:3000"  
}))
//===================================================================================================================

app.use("/",routes) 


//========================================SOCKIT-IO=======================================================================
const { Server } = require("socket.io");

//=================================================SOCKIT-IO===============================================================
PORT=7000
const server= app.listen(PORT,()=>{
    console.log(`server is running at localhost=>${PORT}..........................`)
});

const io = new Server(server,{pingTimeout:60000 ,cors:{origin:"http://localhost:3000",credentials:true}}) ;
io.on('connection', (socket) => {
    console.log('Socket.io Connected..');
  });

//===========================================FRONTEND======================================================================
//===============socket.io-client======================================
import io from "socket.io-client"
const ENDPOINT="http://localhost:7000"
const socket = io(ENDPOINT)
//===============================socket.io-client======================
//==================================================================
//never connect 6000port that is reserved
axios.defaults.baseURL="http://127.0.0.1:7000"
axios.defaults.withCredentials=true;
//==================================================================