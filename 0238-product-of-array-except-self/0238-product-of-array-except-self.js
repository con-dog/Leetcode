/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefix = new Array(nums.length);
    const postfix = new Array(nums.length);
    const answer = [];
    
    for (let i = 0; i < nums.length; i++) {
        prefix[i] = 1;
        postfix[i] = 1;
    }
    
    for (let i = 0; i < prefix.length; i++) {
        if (i === 0) {
            prefix[i] = nums[i];
        } else {
            prefix[i] = prefix[i-1] * nums[i];
        }
    }
    
    for (let j = postfix.length - 1; j >= 0; j--) {
        if (j === postfix.length -1) {
            postfix[j] = nums[j];
        } else {
            postfix[j] = postfix[j+1] * nums[j]
        }
    }
    
    for (let k = 0; k < nums.length; k++) {
        let product;
        switch (k) {
            case 0:
                product = postfix[k+1];
                break;
            case nums.length - 1:
                product = prefix[k-1];
                break;
            default:
                product = prefix[k-1] * postfix[k+1];
        }      
        
        answer.push(product);
                        
    }
    
    console.log(prefix, postfix)
    
    return answer
    
};