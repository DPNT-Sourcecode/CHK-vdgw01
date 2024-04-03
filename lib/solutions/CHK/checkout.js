'use strict';

//noinspection JSUnusedLocalSymbols
module.exports = function (skus) {
    
    let priceTable = {
        A: 50,
        B: 30,
        C: 20,
        D: 15
    }
    
    if(priceTable[skus])
    
    if (skus === "A") {
        return priceTable.A 
    } else if (skus === "B") {
        return priceTable.B
    } else if (skus === "C") {
        return priceTable.C
    } else if (skus === "D") {
        return priceTable.D
    } else {
        return -1
    }
};


