import express from "express";

const app = express()



const port = 4000;


app.get('/',(req,res)=>{
    res.send("hello heroku")
})





app.listen(process.env.PORT||port,()=>{
console.log(`App is runing on ${port}`)
})