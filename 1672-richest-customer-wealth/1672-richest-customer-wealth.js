/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = 0;
    
    accounts.forEach(
        customer => {
            value = customer.reduce(
                (sum, currentValue) => {
                    return sum + currentValue;
                },
                0
            )
            richest = value > richest ? value : richest;
        }
    )
    
    return richest
    
};