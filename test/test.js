/**
 * Created by Aymen Mouelhi (aymen.mouelhi@gmail.com) on 14/07/2015.
 */
var assert = require("assert");
var centralEvent = require("../");

describe('Singleton Event', function() {

    describe('send and receive', function() {
        it('should return "hello world"', function() {

            var received = false;

            centralEvent.on('talk', function(value) {
                received = value;
            });
            centralEvent.emit('talk', 'hello world');

            assert.equal('hello world', received);
        });
    });

});