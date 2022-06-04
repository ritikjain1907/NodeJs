const http = require("http")
const server = http.createServer(function(req,res) {
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("NodeJs Running");
    res.end();
}).listen(3000,()=>console.log("Server Running"));