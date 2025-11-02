import express, { json } from "express"

const app = express();


app.get('/',(req,res)=>{
    res.send("express is up and running");
})


app.get('/health',(req,res)=>{
    res.status(200).json({
        message:"health is OK"
    })
})


const PORT = 3000;
app.listen(PORT,()=>{
    console.log("express is running at port 3000")
})