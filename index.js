import express from "express";
import cors from "cors"
import useRouter from "./routers/useRouter.js"
import mongoose from "mongoose"
import config from "./config.js";


const app = express()
app.use(cors())
app.use(express.json())

async function connect_db() {
    try {
       await mongoose.connect(process.env.MONGO_UI)
       console.log("mongodb connected")
app.use("/",useRouter)

    } catch (error) {
       console.log("err",error);
        
    }
}
connect_db();


app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
    
})