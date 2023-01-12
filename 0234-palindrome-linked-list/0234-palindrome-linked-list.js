/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // To Array
    const arr = [];
    arr.push(head.val)
    while (head.next !== null) {
        head = head.next;
        arr.push(head.val);
    }   

    // Split array in half
    const arr2 = arr.slice(0, arr.length/2)
    // Reverse
    const arr3 = arr.slice(arr.length/2, arr.length).reverse()
    
    // Compare
    return arr2.every((el, index) => el === arr3[index])

};