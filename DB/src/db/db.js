const mongoose=require("mongoose");

async function connectDB(){
    await mongoose.connect("")

    console.log("Database connected successfully");
    
}
module.exports=connectDB;