// * Bagels Group LeetCode Challenge --> Reverse Linked List

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

// * first attempt: use stack DS
const reverseList = head => {
  // create a reference for prev and curr values
  // this will be the new head reference to return out at the end
  let prev = null;
  let curr = head;

  // iterate while curr has value
  while(curr !== null) {
    // temp will be the pointer to the next node before changing its reference
    let temp = curr.next;
    // change current nodes next pointer to point to the previous element
    // since a node doesn't have reference to its previous, store its value
    curr.next = prev;

    prev = curr; 

    curr = temp;
  }
  return prev;
}