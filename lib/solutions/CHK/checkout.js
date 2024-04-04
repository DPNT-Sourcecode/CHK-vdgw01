'use strict';
const priceTable = require('./priceTable');
const groupOffers = require('./groupOffers');

const calculateSkuCount = (skus) => {
    let skuKeys = Object.keys(priceTable)
    let skuCount = {}
    skuKeys.map((key) => skuCount[key] = 0)

    for (let letter of skus) {
        if(priceTable[letter]) {
            skuCount[letter] += 1
        }
    }
    
    return skuCount
}

const applyBuyOneGetOneFree = (skuCount) => {
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
}

const applyGroupOffers = (skuCount, currentTotal) => {
    if(skuCount["S"] != 0 && skuCount["T"] && skuCount["X"] ) {
        skuCount["S"] = 0
        skuCount["T"] = 0
        skuCount["X"] = 0
        return currentTotal + 45
    }
    
    return currentTotal
}

const applyMultiBuyOffersAndCalculateTotal = (skuCount, currentTotal) => {
    // Use count to determine special pricing/ normal pricing and sum
    for (const [key, count] of Object.entries(skuCount)) {
        let tempCount = count
        priceTable[key].offers.forEach((offer) => {
            if(offer.specialOfferPrice) {
                while(tempCount >= offer.specialOfferAmount) {
                    currentTotal += offer.specialOfferPrice
                    tempCount -= offer.specialOfferAmount
                }
            }
        })

        for(let i = 0; i < tempCount; i++) {
            currentTotal += priceTable[key].price
        }
    }
    
    return currentTotal
}

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    // If empty skus, still a valid input so return 0
    if (skus === "") {
        return 0
    }

    let total = 0 
    let skuKeys = Object.keys(priceTable)

    // If any letter not recognised, return invalid input
    for (let letter of skus) {
        if (!skuKeys.includes(letter)) {
            return -1
        }
    }
    
    let skuCount = calculateSkuCount(skus)

    applyBuyOneGetOneFree(skuCount)
    
    total = applyGroupOffers(skuCount, total)

    total = applyMultiBuyOffersAndCalculateTotal(skuCount, total)

    // If nothing was added, assume bad input
    if (total === 0) {
        total = -1
    }
    
    return total
};





