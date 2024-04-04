'use strict';
const priceTable = require('./priceTable');

const calculateSkuCount = (skus, skuCount) => {
    for (let letter of skus) {
        if (!skuKeys.includes(letter)) {
            return -1
        }
        if(priceTable[letter]) {
            skuCount[letter] += 1
        }
    }
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    // If empty skus, still a valid input so return 0
    if (skus === "") {
        return 0
    }

    let total = 0 

    let skuKeys = Object.keys(priceTable)
    let skuCount = {}
    skuKeys.map((key) => skuCount[key] = 0)
    
    // Calculate count of every SKU
    for (let letter of skus) {
        if (!skuKeys.includes(letter)) {
            return -1
        }
        if(priceTable[letter]) {
            skuCount[letter] += 1
        }
    }
    
    // Change count based on buy one get one free
    for (const [key, count] of Object.entries(skuCount)) {
        priceTable[key].offers.forEach((offer) => {
            let tempCount = count 
            if(offer.getFree && count >= offer.specialOfferAmount && skuCount[offer.getFree] > 0) {
                while(tempCount >= offer.specialOfferAmount) {
                    skuCount[offer.getFree] -= 1
                    tempCount -= offer.specialOfferAmount
                }
            }
        })
    }
    
    // Use count to determine special pricing/ normal pricing and sum
    for (const [key, count] of Object.entries(skuCount)) {
        let tempCount = count
        priceTable[key].offers.forEach((offer) => {
            if(offer.specialOfferPrice) {
                while(tempCount >= offer.specialOfferAmount) {
                    total += offer.specialOfferPrice
                    tempCount -= offer.specialOfferAmount
                }
            }
        })

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
