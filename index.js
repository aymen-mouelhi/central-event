/**
 * Created by Aymen Mouelhi (aymen.mouelhi@gmail.com) on 14/07/2015.
 */
var events = require('events');
var    EventEmitter = events.EventEmitter;

var emitter = function () {
    if (arguments.callee._singletonInstance)
        return arguments.callee._singletonInstance;
    arguments.callee._singletonInstance = this;
    EventEmitter.call(this);
};

emitter.prototype.__proto__ = EventEmitter.prototype;

module.exports = new emitter();