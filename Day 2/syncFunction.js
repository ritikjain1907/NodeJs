console.log("Sync Function")

const fs = require("fs");
try {
    const data = fs.readFileSync("./hello.txt","utf-8");
    console.log(data);
    }
catch(e) {
    console.log(e);
}
console.log("End of File");