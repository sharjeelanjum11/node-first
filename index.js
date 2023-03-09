import express from "express";

const app = express()



const port = 4000;


app.get('/',(req,res)=>{
    res.send("hello sharjeel this is my server  ")
})





app.listen(port,()=>{
console.log(`App is runing on ${port}`)
})