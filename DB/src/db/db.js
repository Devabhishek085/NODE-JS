const mongoose=require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://Abhishek:4KFFlMW8z0t8WMlk@cluster0.ta6pzcq.mongodb.net/halley")

    console.log("Database connected successfully");
    
}
module.exports=connectDB;