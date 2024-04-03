'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    
    let priceTable = {
        A: 50,
        B: 30,
        C: 20,
        D: 15
    }
    
    var total = 0
    
    if(priceTable[skus]) {
        total = priceTable[skus]
        return priceTable[skus]
    }

    return -1
};


