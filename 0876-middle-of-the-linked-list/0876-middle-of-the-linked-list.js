/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let traversals = 1;
    let currentNode = head;
    const traversedNodes = [currentNode];
    
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
        traversedNodes.push(currentNode)
        traversals += 1;
    }

    const mid = Math.floor(traversals / 2);
    
    return traversedNodes[mid];
    
};