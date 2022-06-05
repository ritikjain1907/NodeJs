const express = require("express");
const app = express();
app.get("/",(req,res)=> {
    res.send("Hello World");
});

app.get("/users",(req,res)=> {
    res.send("Hello Users");
});

app.post("/users/data",(req,res)=> {
    res.send("Hello Data Users");
});
app.listen(3000,()=>console.log("Server Running on port : 3000"));