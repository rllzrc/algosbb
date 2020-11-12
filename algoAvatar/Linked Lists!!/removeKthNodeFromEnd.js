// ** AE: Linked List Reps Challenge  
// ** --> { remove Kth node from end !!! }

// T A SK !!!

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

// * first attempt: 

// input: LL (head), interger (k node spaces to remove)
// output: no return value (just remove node)
// constraints: optimize, one pass
// edge cases: over counting by 1 space during while loops (making sure you grab the node inclusive to end) + when the node to remove is the head

// * time complexity: O(n) linear
// * space complexity: O(1) constant

// create LL class
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const removeKthNodeFromEnd = (head, k) => {
  // initialize 2 pointers, start at the head
  let first = head;
  let second = head;
  // create a counter variable to keep track of K spaces, start at 1
  // since counter starts at 1, once you reach counter to be less than or equal to K you still want to move the second pointer to the following node so that it points to a node that is K nodes ahead of the first pointer and not just the Kth node
  // * example: 0 -> 1 -> 2 -> 3 -> 4
  // first = 0 >> second = 4
  // that is why you go all the way up to K INCLUSIVE !! ~~
  // so no off by one errors
  // * counter is there so you know how many nodes we've traversed with the second pointer
  let counter = 1;
  // iterate while counter is less than or equal to K
  while(counter <= k) {
    // move second pointer to be second.next
    second = second.next;
    // increment counter
    counter += 1;
  }
  // * okay cool so now that the second pointer is K nodes ahead of the first one, there are 2 cases:
  // first: move both pointers simultaneously until second reaches null
  // second: if second pointer is at null, that means the first pointer is already the node you want to remove (its the head)
  // * you can't just remove the head node, update its value and its next pointer instead
  if(second === null) {
    // update its value and its next pointer 
    // update head of the list to have the value of the following node 
    head.value = head.next.value;
    // update head's next pointer to be the pointer of the following node
    head.next = head.next.next;
    // once overwrite is accomplished, the value of the head node is updated and makes it point to two nodes after it, we're done
    return;
  }
  // * this is for the second scenario:
  // if second.next is not pointing to null
  // when this condition fails to be satisfied, our second pointer will point to the FINAL value of the linked list (its .next point to null) so the first pointer will be at the value (node) that comes right before the node we want to remove
  while(second.next !== null) {
    // increment first and second pointers
    second = second.next;
    first = first.next;
  }
  // * if first points to the node right before the node we want to remove, then that means first.next = NODE TO REMOVE
  // so just overwrite first.next (make it the following instead)
  // first.next = NODE TO REMOVE.next
  // effectively garbage collecting the node to remove 
  first.next = first.next.next;
};