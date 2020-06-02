// ** Day 1 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Delete Node in a Linked List ! }

// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Given linked list -- head = [4,5,1,9], which looks like following.

// * first attempt:
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//

// delete the node given
// node.val = node.next.val
// turn the 5 to a 1, turn node into the next node and then delete it by removing the reference 
const deleteNode = node => {
  // reassign pointer variables 
  node.val = node.next.val;
  node.next = node.next.next;
}

// * test cases!!
console.log(deleteNode(head = [4,5,1,9], node = 5)); // -> [4,1,9]
console.log(deleteNode(head = [4,5,1,9], node = 1)); // -> [4,5,9]