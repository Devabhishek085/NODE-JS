const http=require("http");
const fs=require("fs");

const myServer=http.createServer((req,res)=>{
    if (req.url=="/favicon.ico") return res.end();
    const log=`${Date.now()} ${req.url}: New request received\n`;

    fs.appendFile("log.txt",log,(err,data)=>{
        switch (req.url) {
            case "/":
                res.end("HomePage")
                break;
            case "/about":
                res.end("Hii this is Abhishek")
                break;
            default:
                res.end("404 Error")
        }

    })

})
myServer.listen(8000,()=>{
    console.log("My server started");   
})