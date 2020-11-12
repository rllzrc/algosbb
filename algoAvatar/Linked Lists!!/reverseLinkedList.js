// ** AE: Linked List Reps Challenge  
// ** --> { reverse linked list !!! }

// T A SK !!!

// Write a function that takes in the head of a SINGLY Linked List, reverses the list in place (ie doesn't create a brand new list), and returns its new head.

// You can assume that the input Linked List will always have at least one node; in other words, the head will never be null or None.

// * first attempt: 

// input: LL (head)
// output: return new head reversed
// constraints: optimize, reverse in place
// edge cases: keep in mind pointer reference swap -- order matters!

const reverseLinkedList = (head) => {
  // declare pointer variables
  // the current node in question is always with p2, so we want p2 to start at the head of the LL
  // override .next property of the head to point to null (bc we want the head to become the tail) so p1 is initialized to null
  let pointer1 = null;
  let pointer2 = head;
  // so long as p2 is not null / aka not at the end of the LL
  while(pointer2 !== null) {
    // create pointer 3 variable
    // now captured the p2.next node which we will be able to use reference later once we've overwritten p2.next
    // * why pointer3 declaration in while loop? >> scenario: p2 as the tail and p3 is null, can't do a p3.null.next >> less clean code, more conditionals in between to check this edge case >> *WHY* to handle case cleanly without having to do a null check at the end, just want while loop to work, thus p3 a new variable every iteration in the while loop
    let pointer3 = pointer2.next;
    // reversal of current node
    pointer2.next = pointer1;
    // lost p1 so p2.next must be before this
    pointer1 = pointer2;
    // lost p2, so p1=p2 needs to happen before 
    pointer2 = pointer3; 
  }
  return pointer1; 
};

// * refactored code from above
const reverseLinkedList2 = head => {
  let previousNode = null;
  let currentNode = head;
  while(currentNode !== null) {
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}


// * time complexity: O(n) linear
// * space complexity: O(1) constant