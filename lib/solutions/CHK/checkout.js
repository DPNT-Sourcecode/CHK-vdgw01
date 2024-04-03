'use strict';

// Define our price table
let priceTable = {
    A: {
        price: 50,
        specialOfferAmount: 3,
        specialOfferPrice: 130
    },
    B: {
        price: 30,
        specialOfferAmount: 2,
        specialOfferPrice: 45 
    },
    C: {
        price: 20
    },
    D: {
        price: 15
    }
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    let skuCount = {}
    Object.keys(priceTable).map((key) => skuCount[key] = 0)

    let total = 0 
    
    // Calculate count of every SKU
    for (let letter of skus) {
        if(priceTable[letter]) {
            skuCount[letter] += 1
        }
    }
    
    // Use count to determine special pricing/ normal pricing and sum
    for (const [key, value] of Object.entries(skuCount)) {
        let tempValue = value
        while(tempValue > 0) {
            if (tempValue >= priceTable[key].specialOfferAmount) {
                total += priceTable[key].specialOfferPrice
                tempValue -= priceTable[key].specialOfferAmount
            } else {
                for(let i = 0; i < value; i++) {
                    total += priceTable[key].price
                    tempValue -= 1
                }
            }
        }
    }

    // If nothing was added, assume bad input
    if (total === 0) {
        total = -1
    }
    
    return total
};


