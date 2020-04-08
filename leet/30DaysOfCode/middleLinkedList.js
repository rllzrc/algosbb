// * Day 8 of 30 Days Challenge --> Middle of Linked List!

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.
// If there are two middle nodes, return the second middle node.

// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])

// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

//Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const middleNode = head => {

  let firstNode = head;
  let midNode = head; 
  
  while(firstNode !== null && firstNode.next !== null) {
    firstNode = firstNode.next.next;
    midNode = midNode.next;
  }
  return midNode;
}

// * test cases

console.log(middleNode([1,2,3,4,5,6])); // --> 4
console.log(middleNode([1,2,3,4,5])); // --> 3