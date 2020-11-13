// ** AE: Linked List Reps Challenge  
// ** --> { merge linked list !!! }

// T A SK !!!

// Write a function that takes in the heads of two SINGLY LINKED lists that are in SORTED order, respectively. The function should merge the lists in place (ie it shouldn't create a brand new list) and return the head of the merged list; the merged list should be in sorted order. 

// You can assume that the input linked lists will always have at least one node; in other words, the heads will never be None / null.

// * first attempt: iterative solution
// this is an input class
class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLinkedLists = (headOne, headTwo) => {
  // create pointer variables to keep track of 3 nodes at once
  let currNode1 = headOne; // (P1)
  let prevNode1 = null; // (the previous node of P1, its null since we're starting currNode1 at head of LL 1)
  let currNode2 = headTwo;
  // as long as currNode1 + currNode2 is not null, we still have nodes to traverse in the Linked List
  while(currNode1 !== null && currNode2 !== null) {
    // check for the simple case, if CN1 is smaller than CN2 (no need to mutate, just update pointers)
    if(currNode1.val < currNode2.val) {
      prevNode1 = currNode1;
      currNode1 = currNode1.next;
    } else {
      // this where the meat and potatoes come into play -- order matters!
      // CN2 should come before CN1
      // * but we first have to check the edge case if PN1 is null, aka CN1 is pointing to the head of the LL
      if(prevNode1 !== null) {
        prevNode1.next = currNode2; // -> so CN2 is new head of LL
      }
      // the new prev node in LL1 is now going to be CN2
      prevNode1 = currNode2;
      // shift CN2 to the next node
      currNode2 = currNode2.next;
      // overwriting the former CN2.next val to be CN1
      prevNode1.next = currNode1; 

      // why in this order?
      // we need to keep track of the next val for CN2, but we can only get that next value before we overwrtite the current CN2's .next value
      // & we need prevNode1 = CN2 before we overwrite it
    }
  }
  // if P1 === null, we ran out of nodes in the first LL but we still have values in LL2
  // Every value in the second LL2 should be appended to the LL
  if(currNode1 === null) {
    currNode1.next = currNode2;
  }
  // we need to figure out what is the new, correct head of the merged LL
  return headOne.val < headTwo.val ? headOne : headTwo;
}


// input: 2 sorted Linked Lists (heads)
// output: Return head of new merged linked list
// constraints: optimize, can mutate input array
// edge cases: if @ head of LL (in which its prev === null), if p2 === null (then every val in the first LL is in proper order already), handling the "simple scenario" of if the conditional check passes (is P1 < P2)

// * time complexity: O(N +  M) >> since we have to traverse through 2 LLs
// * space complexity: O(1) constant