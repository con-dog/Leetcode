/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;

    const baseCase = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const edgeCase = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };

    for (let currIndex = 0; currIndex < s.length; currIndex++) {
        let currChar = s[currIndex];
        let nextChar = s[currIndex + 1];

        if (currChar + nextChar in edgeCase) {
            sum -= baseCase[currChar];
        } else {
            sum += baseCase[currChar];
        }

    }
    
    return sum;
};