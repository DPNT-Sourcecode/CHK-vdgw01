var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const hello = require('../../../lib/solutions/HLO/hello');

describe('HLO challenge: saying hello to the world', function() {
	it('should say hello to John', function() {
	    assert.equal(hello("John"), "Hello, John!");
	});

	it('should say hello to Barbara', function() {
	    assert.equal(hello("Barbara"), "Hello, John!");
	});
})