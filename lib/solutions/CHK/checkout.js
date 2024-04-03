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
    for (const [key, count] of Object.entries(skuCount)) {
        let tempCount = count
        for (const offer in priceTable[key].offers) {
            while(tempCount >= offer.specialOfferAmount) {
                total += offer.specialOfferPrice
                tempCount -= offer.specialOfferAmount
            }
        }
        for(let i = 0; i < tempCount; i++) {
            total += priceTable[key].price
        }
    }

    // If nothing was added, assume bad input
    if (total === 0) {
        total = -1
    }
    
    return total
};