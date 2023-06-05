const { default: mongoose } = require("mongoose")

mongoose.connect(process.env.MONGOCONNECT).then(()=>console.log("mongoose is connected"))
.catch((e)=>{console.log("mongoose is not connected")})