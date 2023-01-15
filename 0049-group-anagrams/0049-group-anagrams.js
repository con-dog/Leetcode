/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const exists = {};
    const grouped = [];
    let groupIndex = 0;
    
    strs.forEach((el, index) => {
        const sortedEl = [...el].sort().join("");
        if (sortedEl in exists) {
            grouped[exists[sortedEl]["groupIndex"]].push(el)
        } else {
            exists[sortedEl] = {
                groupIndex: groupIndex
            };
            groupIndex += 1;
            grouped.push([el])
        }
        
    })
    
    return grouped;
    
    
};