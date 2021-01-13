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
  constructor(value) {
    this.value = value;
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
  setHead(node) {
    // edge case check if dealing with an empty LL
    if(this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    // insert node before current head, update the head value
    // for insertBefore method, the node here is going to be the argument under nodeToInsert
    this.insertBefore(this.head, node);
  }

  // * time: O(1) - constant
  // * space: O(1) - constant
  setTail(node) {
    // edge case if dealing with an empty LL
    if(this.tail === null) {
      // set the passed in node as the head of the LL then
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  // * time: O(1) - constant
  // * space: O(1) - constant
  insertBefore(node, nodeToInsert) {
    // check if node to insert is equal to the head/tail aka the only node on the list
    if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
    // invoke remove method on node to insert as a defensive check to not duplicate if nodeToInsert already exists in LL
    this.remove(nodeToInsert);
    // connect the node to the adjacent ones in between
    // set the value to another one before overwriting it in line 45
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node; 
    // chcek to see if node is/is not the head of the LL
    if(node.prev === null) {
      this.head = nodeToInsert;
    } else {
      // take node's prev value and update its next pointer to be nodeToInsert
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert; 
  }

  // * time: O(1) - constant
  // * space: O(1) - constant 
  insertAfter(node, nodeToInsert) {
    // same as insertBefore method, just inverse!
    if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
    // otherwise, remove the node just in case
    this.remove(nodeToInsert);
    // since nodeToInsert will come AFTER 
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    // if dealing with the tail, overwrite
    if(node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    // reassignment has to come after we set the value above on line 56
    node.next = nodeToInsert;
  }

  // * time: O(P) >> iterating up until position aka p >> linear
  // * space: O(1) - constant
  insertAtPosition(position, nodeToInsert) {
    // check if we are at 1, aka the head of the LL
    if(position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while(node !== null && currentPosition !== position) {
      // keep traversing the LL
      node = node.next;
      currentPosition += 1;
    }
    // either our node is at tail or our currentPosition has reached the value of the passed in position or its before the tail
    if(node !== null) {
      // insert it before the tail
      this.insertBefore(node, nodeToInsert);
    } else {
      // we're at the tail, so set it as is
      this.setTail(nodeToInsert);
    }
  }

  // * time: O(n) - linear
  // * space: O(1) - constant
  // aka the searching method
  containsNodeWithValue(value) {
    // start with the head
    let node = this.head
    // check while node is not null and node.val is not the value
    // node = node.next --> basic way to traverse the LL or go to the next node
    while(node !== null && node.value !== value) node = node.next; 
    return node !== null;
  }

  // * time: O(n) - linear
  // * space: O(1) - constant
  // combo of search and remove method
  removeNodesWithValue(value) {
    // start with the head, grab its value
    let node = this.head;
    // iterate while node is not null aka not at end of LL
    while(node !== null) {
      // create a variable to store node to remove aka current node we are at
      const nodeToRemove = node;
      // reassign pointers
      node = node.next;
      // check if node's value is the value you want to remove
      if(nodeToRemove.value === value) {
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
    // alt method: store it in a variable such as :
    // tempPrev = node.prev
    // node.prev = null
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