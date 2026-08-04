const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.listen(3000);