const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

//init object
const myEmitter = new MyEmitter();

myEmitter.on('event1' , () => console.log('event1 fired'));
myEmitter.on('event2' , () => console.log('event2 fired'));
myEmitter.on('event3' , () => console.log('event3 fired'));
myEmitter.on('event4' , () => console.log('event4 fired'));
myEmitter.on('event5' , () => console.log('event5 fired'));

myEmitter.emit('event1');
myEmitter.emit('event2');
myEmitter.emit('event1');
myEmitter.emit('event4');
myEmitter.emit('event5');