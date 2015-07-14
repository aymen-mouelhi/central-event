# central-event

A global event bus using a singleton event emitter class.

## Install
```
npm install central-event --save
```

## How to use
Require it in every file where you want to communicate with another file.

Module A:
```
var emitter = require('central-event');
emitter.emit('myCustomEvent', arg1, arg2, ....)
```

Module B:
```
var emitter = require('central-event');
emitter.on('myCustomEvent', function(arg1, arg2, ...) {
   . . . this will execute when the event is fired in module A
});
```