/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const counts = {};
    // Array length nums + 1, indices from 0 to length nums
    const occurences = Array.from( new Array(nums.length + 1), () => [] )
    const topK = [];
    let j = 0;
    
    nums.forEach(num => {
        num in counts ?  counts[num] += 1 : counts[num] = 1; 
    })
    
    
    for (const [num, count] of Object.entries(counts)) {
        occurences[count].push(parseInt(num));
    }
    
    for (let i = occurences.length - 1; i >= 0; i--) {
        if (occurences[i].length === 0) {
            continue
        } else {
            occurences[i].forEach(val => {
                if (j < k) {
                    topK.push(val)
                }
                j += 1;
            })
        }
    }
    
    return topK
};