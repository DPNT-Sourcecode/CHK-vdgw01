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
})