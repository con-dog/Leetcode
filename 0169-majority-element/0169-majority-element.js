/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = {};
    for (let i = 0; i < nums.length; i++) {
        nums[i] in count ? count[nums[i]] += 1 : count[nums[i]] = 1;
    }
    
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
};