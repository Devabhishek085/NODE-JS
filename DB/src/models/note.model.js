const mongoose=require("mongoose");

//creating the schema
const noteSchema=new mongoose.Schema({
    title: String,
    description: String
})
const noteModel=mongoose.model("notes",noteSchema);
module.exports=noteModel;