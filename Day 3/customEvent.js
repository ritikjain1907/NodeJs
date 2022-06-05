const events = require("events");
const event = new events.EventEmitter();
event.on('click',()=>console.log("First Event"));
event.emit('click');

event.on('click2',(p1)=>console.log(p1));
event.emit('click2','Passing Parameter');

event.on('click3',(n1,n2)=>console.log(n1+n2));
event.emit('click3',4,5);