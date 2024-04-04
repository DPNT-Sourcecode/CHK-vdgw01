var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const checkout = require('../../../lib/solutions/CHK/checkout');

describe('CHK challenge R1: calculate checkout based on SKUs', function() {
    
    // Single Item Pricing

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

	it('should return 15 if passed SKU "E"', function() {
	    assert.equal(checkout("E"), 40);
	});

	it('should return 10 if passed SKU "F"', function() {
	    assert.equal(checkout("F"), 10);
	});

	it('should return 20 if passed SKU "G"', function() {
	    assert.equal(checkout("G"), 20);
	});

	it('should return 10 if passed SKU "H"', function() {
	    assert.equal(checkout("H"), 10);
	});

	it('should return 35 if passed SKU "I"', function() {
	    assert.equal(checkout("I"), 35);
	});

	it('should return 60 if passed SKU "J"', function() {
	    assert.equal(checkout("J"), 60);
	});

	it('should return 70 if passed SKU "K"', function() {
	    assert.equal(checkout("K"), 70);
	});

	it('should return 90 if passed SKU "L"', function() {
	    assert.equal(checkout("L"), 90);
	});

	it('should return 15 if passed SKU "M"', function() {
	    assert.equal(checkout("M"), 15);
	});

	it('should return 40 if passed SKU "N"', function() {
	    assert.equal(checkout("N"), 40);
	});

	it('should return 10 if passed SKU "O"', function() {
	    assert.equal(checkout("O"), 10);
	});

	it('should return 50 if passed SKU "P"', function() {
	    assert.equal(checkout("P"), 50);
	});

	it('should return 30 if passed SKU "Q"', function() {
	    assert.equal(checkout("Q"), 30);
	});

	it('should return 50 if passed SKU "R"', function() {
	    assert.equal(checkout("R"), 50);
	});

	it('should return 20 if passed SKU "S"', function() {
	    assert.equal(checkout("S"), 20);
	});

	it('should return 20 if passed SKU "T"', function() {
	    assert.equal(checkout("T"), 20);
	});

	it('should return 40 if passed SKU "U"', function() {
	    assert.equal(checkout("U"),40 );
	});

	it('should return 50 if passed SKU "V"', function() {
	    assert.equal(checkout("V"), 50);
	});

	it('should return 20 if passed SKU "W"', function() {
	    assert.equal(checkout("W"),20);
	});

	it('should return 17 if passed SKU "X"', function() {
	    assert.equal(checkout("X"), 17);
	});

	it('should return 20 if passed SKU "Y"', function() {
	    assert.equal(checkout("Y"), 20);
	});

	it('should return 21 if passed SKU "Z"', function() {
	    assert.equal(checkout("Z"), 21);
	});
    
   // Invalid inputs

	it('should return -1 if passed an invalid SKU "1"', function() {
	    assert.equal(checkout("1"), -1);
	});

	it('should return -1 if passed an invalid SKU "ABCa"', function() {
	    assert.equal(checkout("ABCa"), -1);
	});

	it('should return -1 if passed an invalid SKU "AxA"', function() {
	    assert.equal(checkout("AxA"), -1);
	});

    // Empty input
    
	it('should return 0 if passed an of SKU ""', function() {
	    assert.equal(checkout(""), 0);
	})
    
    // Compound Inputs

	it('should return 100 if passed SKU "AA"', function() {
	    assert.equal(checkout("AA"), 100);
	});

	it('should return 80 if passed SKU "AB"', function() {
	    assert.equal(checkout("AB"), 80);
	});

	it('should return 30 if passed SKU "DD"', function() {
	    assert.equal(checkout("DD"), 30);
	});

	it('should return 20 if passed SKU "FF"', function() {
	    assert.equal(checkout("FF"), 20);
	});

	it('should return 70 if passed SKU "BE"', function() {
	    assert.equal(checkout("BE"), 70);
	});
    
    // Special Offers

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

	it('should return 80 if passed offer SKU "EE"', function() {
	    assert.equal(checkout("EE"), 80);
	});

	it('should return 80 if passed special offer SKU "BEE"', function() {
	    assert.equal(checkout("BEE"), 80);
	});

	it('should return 110 if passed special offer SKU "EEBB"', function() {
	    assert.equal(checkout("EEBB"), 110);
	});

	it('should return 125 if passed special offer SKU "EEBBB"', function() {
	    assert.equal(checkout("EEBBB"), 125);
	});

	it('should return 160 if passed special offer SKU "EEEEBB"', function() {
	    assert.equal(checkout("EEEEBB"), 160);
	});
    
    it('should return 20 if passed special offer SKU "FFF"', function() {
        assert.equal(checkout("FFF"), 20)
    });

    it('should return 40 if passed special offer SKU "FFAFFFF"', function() {
        assert.equal(checkout("FFAFFFF"), 90)
    });

    it('should return 45 if passed special offer SKU "HHHHH"', function() {
        assert.equal(checkout("HHHHH"), 45)
    });

    it('should return 80 if passed special offer SKU "HHHHHHHHHH"', function() {
        assert.equal(checkout("HHHHHHHHHH"), 80)
    });

    it('should return 150 if passed special offer SKU "KK"', function() {
        assert.equal(checkout("KK"), 120)
    });

    it('should return 120 if passed special offer SKU "NNMN"', function() {
        assert.equal(checkout("NNMN"), 120)
    });

    it('should return 200 if passed special offer SKU "PPPPP"', function() {
        assert.equal(checkout("PPPPP"), 200)
    });

    it('should return 80 if passed special offer SKU "QQQ"', function() {
        assert.equal(checkout("QQQ"), 80)
    });

    it('should return 150 if passed special offer SKU "RRRQ"', function() {
        assert.equal(checkout("RRRQ"), 150)
    });

    it('should return 120 if passed special offer SKU "UUUU"', function() {
        assert.equal(checkout("UUUU"), 120)
    });

    it('should return 90 if passed special offer SKU "VV"', function() {
        assert.equal(checkout("VV"), 90)
    });

    it('should return 130 if passed special offer SKU "VVV"', function() {
        assert.equal(checkout("VVV"), 130)
    });
	
	// Group offers
	//
    it('should return 45 if passed special offer SKU "STX"', function() {
        assert.equal(checkout("STX"), 45)
    });
})