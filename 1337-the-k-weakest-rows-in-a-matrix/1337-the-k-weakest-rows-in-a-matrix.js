/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const reduced = [];
    const minIndices = [];

    mat.forEach(row => {
        reduced.push(row.reduce((sum, currentVal) => {
            return sum + currentVal;
        }, 0))})
    
    for (let i = 0; i < reduced.length; i++) {
        const minIndex = reduced.indexOf(Math.min(...reduced))
        minIndices.push(minIndex);
        reduced[minIndex] = Infinity;
    }

    return minIndices.slice(0, k);

};