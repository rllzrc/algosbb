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
    // node = node.next --> basic way to traverse the LL or go to the next node
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
    // check if node is the head -- check if we are at the head or the tail of the LL
    if(node === this.head) this.head = this.head.next;
    // check opposite, check if its the tail
    if(node === this.tail) this.tail = this.tail.prev;
    // the above just took care of updating the head + tail of the LL, so we must update pointers of surrounding nodes -- invoke removeBindings method to do so 
    this.removeNodeBindings(node);
  }

  // this method updates pointers of surrounding nodes + removes pointers of given nodes
  // * BEFORE we REMOVE pointers of the given nodes we have to first UPDATE the pointers of the SURROUNDING nodes
  // the ONLY way we can access the SURROUNDING nodes is by having access to them through our current nodes -- must check as well that we are not pointing to null values
  removeNodeBindings(node) {
    // check node's prev value, make sure its not set to null and value doesnt equal it (to make sure we can actually access the .next value)
    if(node.prev !== null) {
      // node.prev must be accessible before we overwrite it to none and lose it 4ever ;(
      // this will update the prev node's next pointer to point to the current node's next value
      node.prev.next = node.next;
    }
    // same thing as above, just the inverse
    // if the next node is not null, we want to update its .prev pointer to be at the current node we are trying to remove's .prev pointer value 
    if(node.next !== null) {
      node.next.prev = node.prev;
    }
    // reassign prev and next values to null to remove bindings 
    node.prev = null;
    node.next = null;
  }
}