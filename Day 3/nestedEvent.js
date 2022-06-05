const events = require("events");
const event = new events.EventEmitter();

const first_event = function(n1,n2) {
    console.log(n1+n2);
    console.log("First Event");
    event.emit('click2');
}

const second_event = function() {
    console.log("Second Event");
    event.emit('click3');
}

const third_event = function() {
    console.log("Third Event");
}

event.on('click',first_event);
event.on('click2',second_event);
event.on('click3',third_event);

event.emit('click',4,5);