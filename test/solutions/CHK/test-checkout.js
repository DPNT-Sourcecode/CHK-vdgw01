var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge R1: calculate checkout based on SKUs', function() {
	it('should return 50 if passed SKU "A"', function() {
	    assert.equal(checkout("A"), 50);
	});

	it('should return 30 if passed SKU "B"', function() {
	    assert.equal(checkout("B"), 30);
	});

	it('should return 20 if passed SKU "C"', function() {
	    assert.equal(checkout("C"), 20);
	});

	it('should return 15 if passed SKU "D"', function() {
	    assert.equal(checkout("D"), 15);
	});

	it('should return -1 if passed an invalid SKU "1"', function() {
	    assert.equal(checkout("1"), -1);
	});
})