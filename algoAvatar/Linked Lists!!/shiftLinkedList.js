// ** AE: Linked List Reps Challenge  
// ** --> { shift linked list !!! }

// T A SK !!!

// Write a function that takes in the head of a Singly Linked List and an integer k, shifts the list in place (ie doesn't create a brand new list) by k positions, and returns its new head.

// Shifting a Linked List means moving its nodes forward or backwards and wrapping them around the list where appropriate. For example, shifting a Linked List forward by one position would make its tail become the new head of the linked list.

// Whether nodes are moved forward or backward is determined by whether k is positive or negative. 

// Each Linked List node has an integer value as well as a next node pointing to the next node in the list or to None / null if its the tail end of the list.

// input: head of singly linked list
// output: return the node (not just its value)
// constraints: optimize, constant space
// edge cases: 

// * time complexity: O(N) >> linear, focus only on first pointer
// * space complexity: O(1) constant >> 

// * first attempt: iterative solution
// this is an input class
class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// * first attempt:
const findLoop = head => {
  // initalize pointers
  // * instead of pointing both at the head, start with these values other wise we will hit the while loop condition almost immediately 
  let first = head.next;
  let second = head.next.next;
  // iterate while first is not equal to second
  while(first !== second) {
    // move pointers accordingly
    first = first.next;
    // second moves two slots over
    second = second.next.next;
  };
  // next, to travel the remainder of the distance until the origin of the loop --> pro-tip: remainder = equal to the distance between the start of the LL and the origin of the loop
  // grab first pointer and bring back to the beginning of LL
  first = head;
  // iterate while first is not equal to second
  // move at the same time
  while(first !== second) {
    // now both travels at the same pace
    first = first.next;
    second = second.next;
  };
  // once they overlap, they will converge into the origin of the loop
  return first; 
};