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
    
    for (let letter of skus) {
        if(priceTable[letter]) {
            total += priceTable[letter]
        }
    }
    
    if (total === 0) {
        total = -1
    }
    
    return total
};


