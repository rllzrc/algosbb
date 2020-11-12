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
  // * time: O(1) - constant
  // * space: O(1) - constant
  insertBefore(node, nodeToInsert) {
    // check if node to insert is equal to the head/tail aka the only node on the list
    if(nodeToInsert === this.head || nodeToInsert === tail) return;
    // invoke remove method on node to insert as a defensive check to not duplicate
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node; 
    // chcek tho see if node is/is not the head of the LL
    if(node.prev === null) {
      this.head = nodeToInsert;
    } else {
      // take node's prev value and update its next pointer to be nodeToInsert
      node.prev.next = nodeToInsert
    }
    node.prev = nodeToInsert; 
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

  // * time: O(n) - linear
  // * space: O(1) - constant
  removeNodesWithValue(val) {
    // start with the head, grab its value
    let node = this.head;
    // iterate while node is not null
    while(node !== null) {
      // create a variable to store node to remove
      const nodeToRemove = node;
      // reassign pointers
      node = node.next;
      // check if node's value is the value you want to remove
      if(nodeToRemove.val === val) {
        this.remove(nodeToRemove);
      }
    }
  }

  // * time: O(1) - constant
  // * space: O(1) - constant
  remove(node) {
    // check if node is the head
    if(node === this.head) this.head = this.head.next;
    // check opposite, check if its the tail
    if(node === this.tail) this.tail = this.tail.prev;
    // invoke node bindings method
    this.removeNodeBindings(node);
  }

  removeNodeBindings(node) {
    // check node's prev value, make sure its not set to null and value doesnt equal it
    if(node.prev !== null) {
      node.prev.next = node.next;
    }
    // same thing but checking its previous val
    if(node.next !== null) {
      node.next.prev = node.prev;
    }
    // reassign prev and next values
    node.prev = null;
    node.next = null;
  }
}