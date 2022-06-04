console.log("Async Function")

const fs = require("fs")
fs.readFile("./hello.txt","utf-8",(err,data)=> {
    if(err) throw err;
    console.log(data);
})
console.log("End of File");

//End of File is printed before File contents
//Making it sync will resolve the problem