var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const sum = require('../../../lib/solutions/SUM/sum');

describe('SUM challenge: adding two numbers', function() {
	it('should return 3, which is the sum of 1 and 2', function() {
	    assert.equal(sum(1, 2), 3);
	});

	it('should return 4, which is the sum of 2 and 2', function() {
	    assert.equal(sum(2, 2), 4);
	});

	it('should return 100, which is the sum of 0 and 100', function() {
	    assert.equal(sum(0, 100), 100);
	});
});