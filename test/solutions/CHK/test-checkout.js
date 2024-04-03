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

	it('should return 15 if passed SKU "D"', function() {
	    assert.equal(checkout("E"), 40);
	});

	it('should return -1 if passed an invalid SKU "1"', function() {
	    assert.equal(checkout("1"), -1);
	});

	it('should return -1 if passed an invalid SKU "ABCa"', function() {
	    assert.equal(checkout("ABCa"), -1);
	});

	it('should return -1 if passed an invalid SKU "AxA"', function() {
	    assert.equal(checkout("AxA"), -1);
	});

	it('should return -1 if passed an of SKU ""', function() {
	    assert.equal(checkout(""), 0);
	})

	it('should return 100 if passed SKU "AA"', function() {
	    assert.equal(checkout("AA"), 100);
	});

	it('should return 80 if passed SKU "AB"', function() {
	    assert.equal(checkout("AB"), 80);
	});

	it('should return 30 if passed SKU "DD"', function() {
	    assert.equal(checkout("DD"), 30);
	});

	it('should return 70 if passed SKU "BE"', function() {
	    assert.equal(checkout("BE"), 70);
	});

	it('should return 130 if passed special offer SKU "AAA"', function() {
	    assert.equal(checkout("AAA"), 130);
	});

	it('should return 130 if passed special offer SKU "AAAA"', function() {
	    assert.equal(checkout("AAAA"), 180);
	});

	it('should return 45 if passed special offer SKU "BB"', function() {
	    assert.equal(checkout("BB"), 45);
	});

	it('should return 260 if passed special offer SKU "AAAAAA"', function() {
	    assert.equal(checkout("AAAAAA"), 250);
	});

	it('should return 175 if passed special offer SKU "ABABA"', function() {
	    assert.equal(checkout("ABABA"), 175);
	});

	it('should return 330 if passed special offer SKU "AAAAAAAA"', function() {
	    assert.equal(checkout("AAAAAAAA"), 330);
	});

	it('should return if passed special offer SKU "EE"', function() {
	    assert.equal(checkout("EE"), 80);
	});

	it('should return if passed special offer SKU "BEE"', function() {
	    assert.equal(checkout("BEE"), 80);
	});

	it('should return if passed special offer SKU "BEE"', function() {
	    assert.equal(checkout("BEE"), 80);
	});
})
