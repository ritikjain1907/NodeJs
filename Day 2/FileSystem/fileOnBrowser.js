const fs = require("fs")
const http = require("http")
const server = http.createServer(function(req,res) {
    fs.readFile("./hello.txt", "utf-8", (err,data)=> {
        if(err) throw err;
        res.writeHead(200,{"content-type":"text/plain"});
        res.write(data);
        res.end();
    });
}).listen(3000,()=>console.log("Server Running"));
