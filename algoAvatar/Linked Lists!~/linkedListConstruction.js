// ** AE: Linked List Daily Reps Challenge
// ** --> { linked list construction !!! }

// T A SK !!!

// Write a DoublyLinkedList class that has a head and a tail, both of which point to either a linked list Node or None / null. The class should support:

// - inserting the head and tail of the linked list
// - inserting nodes before and after other nodes as well as at given positions (position of head node = 1)
// - removing given nodes and removing nodes with given values
// - searching for nodes with given values.

// * first attempt:
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this. next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // * time: O(n) - linear
  // * space: O(1) - constant
  containsNodeWithVal(val) {
    // start with the head
    let node = this.head
    // check while node is not null and node.val is not the value
    while(node !== null && node.val !== val) node = node.next; 
    return node !== null;
  }
}



