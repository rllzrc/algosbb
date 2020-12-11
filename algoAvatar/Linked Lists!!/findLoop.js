// ** AE: Linked List Reps Challenge  
// ** --> { find loop !!! }

// T A SK !!!

// Write a function that takes in the head of a Singly Linked List that contains a loop (in other words, the list's tail node points to some node in the list instead of None / null). The function should return the node (the actual node--not just its value) from which the loop originates in constant space.

// Each linked list node has an integer value as well as a next node pointing to the next node in the list.

// input: head of singly linked list
// output: return the node (not just its value)
// constraints: optimize, constant space
// edge cases: 

// * time complexity: O(N) >> linear, focus only on first pointer
// * space complexity: O(1) constant >> no need to use hash table, just using two pointer approach 

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