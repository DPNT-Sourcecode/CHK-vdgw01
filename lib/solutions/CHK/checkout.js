'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    
    // Define our price table
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
    
    let skuCount = {}
    Object.keys(priceTable).map((key) => skuCount[key] = 0)
    
    let total = 0 
    
    // Calculate our 'buckets' of the same SKU id
    for (let letter of skus) {
        if(priceTable[letter]) {
            skuCount[letter] += 1
        }
    }
    
    // Calculate sum using 'buckets' of SKUs
    for (const [key, value] of Object.entries(skuCount)) {
        for(let i = 0; i < value; i++) {
            total += priceTable[key].price
        }
    }

    if (total === 0) {
        total = -1
    }
    
    return total
};

