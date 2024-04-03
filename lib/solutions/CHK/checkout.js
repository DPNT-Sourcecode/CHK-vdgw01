'use strict';

// Define our price table
// Note: Offers should be ordered from highest priority to apply, to lowest
const priceTable = {
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
    },
    E: {
        price: 40,
        offers: [
            {
                specialOfferAmount: 2,
                getFree: 'B'
            }
        ]
    },
    F: {
        price: 10,
        offers: [
            {
                specialOfferAmount: 3,
                getFree: 'F'
            }
        ]
    },
    G: {
        price: 20,
        offers: []
    },
    H: {
        price: 10,
        offers: [
            {
                specialOfferAmount: 10,
                specialOfferPrice: 80 
            },
            {
                specialOfferAmount: 5,
                specialOfferPrice: 45 
            }
        ]
    },
    I: {
        price: 35,
        offers: []
    },
    J: {
        price: 60,
        offers: []
    },
    K: {
        price: 70,
        offers: [
            {
                specialOfferAmount: 2,
                specialOfferPrice: 120 
            }
        ]
    },
    L: {
        price: 90,
        offers: []
    },
    M: {
        price: 15,
        offers: []
    },
    N: {
        price: 40,
        offers: [
            {
                specialOfferAmount: 3,
                getFree: 'M'
            }
        ]
    },
    O: {
        price: 10,
        offers: []
    },
    P: {
        price: 50,
        offers: [
            {
                specialOfferAmount: 5,
                specialOfferPrice: 200 
            }
        ]
    },
    Q: {
        price: 30,
        offers: [
            {
                specialOfferAmount: 3,
                specialOfferPrice: 80 
            }
        ]
    },
    R: {
        price: 50,
        offers: [
            {
                specialOfferAmount: 3,
                getFree: 'Q'
            }
        ]
    },
    S: {
        price: 20,
        offers: []
    },
    T: {
        price: 20,
        offers: []
    },
    U: {
        price: 40,
        offers: [
            {
                specialOfferAmount: 4,
                getFree: 'U'
            }
        ]
    },
    V: {
        price: 50,
        offers: [
            {
                specialOfferAmount: 3,
                specialOfferPrice: 130 
            },
            {
                specialOfferAmount: 2,
                specialOfferPrice: 90 
            }
        ]
    },
    W: {
        price: 20,
        offers: []
    },
    X: {
        price: 17,
        offers: []
    },
    Y: {
        price: 20,
        offers: []
    },
    Z: {
        price: 21,
        offers: []
    },
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


