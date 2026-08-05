const express=require("express"); 

const app=express(); 
app.use(express.json())

const notes=[];

app.post("/notes",(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:"notes created successfully"
    }) 
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes: notes
    })
})

app.delete("/notes/:index",(req,res)=>{
    const index=req.params.index;
    delete notes [index];
    res.status(200).json({
        message:"notes deleted successfully"
    })
})

app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index;
    const description=req.body.description;

    notes [index].description=description;
    
    res.status(200).json({
        message: "notes updated!"
    })

})




module.exports=app
