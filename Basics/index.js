const http=require("http");
const fs=require("fs");

const myServer=http.createServer((req,res)=>{

    const log=`${Date.now()} ${req.url}: New request received\n`;

    fs.appendFile("log.txt",log,(err,data)=>{
        switch (req.url) {
            case "/":
                res.end("HomePage")
                break;
            case "/about":
                res.end("Hii this is Abhishek Pal")
                break;
            default:
                res.end("404 Error")
        }

    })

})
myServer.listen(8000,()=>{
    console.log("My server started");   
})