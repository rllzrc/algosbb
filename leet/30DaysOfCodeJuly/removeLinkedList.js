// ** Day 20 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Remove Linked List Elements ! }

// T A S K !!
// Remove all elements from a linked list of integers that have value val.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//

// traverse the list
// if val of next node is it,
// set previous to be the next instead
// .next = .next.next
// * first attempt:
// time complexity:
// * O(n) - linear scan through the linked list
const removeElements = (head, val) => {
  // quick edge case checks
  // make sure head node is "normal"
  // change head node to the next instead of having a dummy node
  while(head !== null && head.val === val) {
    // get rid of it from the linked list
    head = head.next
  }

  // create a pointer or current value
  let currNode = head;
  // iterate while current node and next nodes are not null
  while(currNode !== null && currNode.next !== null) {
    // if the next node is the value we want to remove
    if(currNode.next.val === val) {
      // reassign to remove it
      currNode.next = currNode.next.next;
    } else {
      // if not, continue traversal
      currNode = currNode.next;
    }
  }
  return head; 
}

// * second attempt: using a dummy head!
const removeElements = (head, val) => {
  // create a dummy pointer
  let dummy = new ListNode(0);
  let current = dummy;
  dummy.next = head;

  // while the next node is valid and not null
  while(current.next) {
    // check to see if it is equal to the value
    if(current.next.val === val) {
      // reassign to remove value
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return dummy.next;
};


