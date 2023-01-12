/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        let val = i + 1;
        if (val % 15 === 0) {
            arr.push("FizzBuzz");
        } else if (val % 5 === 0) {
            arr.push("Buzz");
        } else if (val % 3 === 0) {
            arr.push("Fizz")
        } else {
            arr.push(val.toString())
        }
    }
    return arr
};