import express from "express";

const app = express()



const port = 4000;


app.get('/',(req,res)=>{
    res.json({message:"hello owrld"})
})





app.listen(process.env.PORT||port,()=>{
console.log(`App is runing on ${port}`)
})