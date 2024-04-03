'use strict';

// Define our price table
let priceTable = {
    A: {
        price: 50,
        offers: [
            {
                specialOfferAmount: 5,
                specialOfferPrice: 200 
            },
            {
                specialOfferAmount: 3,
                specialOfferPrice: 130
            }
        ]
    },
    B: {
        price: 30,
        offers: [
            {
                specialOfferAmount: 2,
                specialOfferPrice: 45 
            }
        ]
    },
    C: {
        price: 20,
        offers: []
    },
    D: {
        price: 15,
        offers: []
    }
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    if (skus === "") {
        return 0
    }

    let priceTableKeys = Object.keys(priceTable)
    let skuCount = {}
    priceTableKeys.map((key) => skuCount[key] = 0)

    let total = 0 
    
    // Calculate count of every SKU
    for (let letter of skus) {
        if (!priceTableKeys.includes(letter)) {
            return -1
        }
        if(priceTable[letter]) {
            skuCount[letter] += 1
        }
    }
    
    // Use count to determine special pricing/ normal pricing and sum
    for (const [key, value] of Object.entries(skuCount)) {
        let tempValue = value
        while(tempValue > 0) {
            if (tempValue >= priceTable[key].offers[0]?.specialOfferAmount) {
                total += priceTable[key].offers[0]?.specialOfferPrice
                tempValue -= priceTable[key].offers[0]?.specialOfferAmount
            } else {
                for(let i = 0; i < tempValue; i++) {
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
