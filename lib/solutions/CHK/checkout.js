'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    
    let priceTable = {
        A: {
            price: 50,
            specialOfferAmount: 3,
            specialOfferPrice: 130
        },
        B: {
            price: 30
        },
        C: {
            price: 20
        },
        D: {
            price: 15
        }
    }
    
    var total = 0 
    
    for (let letter of skus) {
        if(priceTable[letter]) {
            total += priceTable[letter].price
        }
    }
    
    if (total === 0) {
        total = -1
    }
    
    return total
};


