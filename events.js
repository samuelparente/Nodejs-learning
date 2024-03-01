//Samuel Parente
//NODE JS

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Somebody knock on the door!');
}

//Assign the event handler to an event:
eventEmitter.on('knock', myEventHandler);

//Fire the 'knock' event:
eventEmitter.emit('knock');