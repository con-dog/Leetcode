/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    // To array    
    arrS = Array.from(s);
    arrT = Array.from(t);

    arrS.sort()
    arrT.sort()


    return arrS.every((el, i) => {
        return ((el === arrT[i]) && (arrS.length === arrT.length))
    })

};