// ** AE: Linked List Reps Challenge  
// ** --> { shift linked list !!! }

// T A SK !!!

// Write a function that takes in the head of a Singly Linked List and an integer k, shifts the list in place (ie doesn't create a brand new list) by k positions, and returns its new head.

// Shifting a Linked List means moving its nodes forward or backwards and wrapping them around the list where appropriate. For example, shifting a Linked List forward by one position would make its tail become the new head of the linked list.

// Whether nodes are moved forward or backward is determined by whether k is positive or negative. 

// Each Linked List node has an integer value as well as a next node pointing to the next node in the list or to None / null if its the tail end of the list.

// input: head of singly linked list
// output: return new head after shift
// constraints: optimize, constant space
// edge cases: if k = 0 (do nothing, return OG head) / if k = v large number (use % operator to simplify algo since it will land on the same spot) / if k = a negative number 

// * time complexity: O(N) >> must traverse entire LL to grab tail + count the length of LL
// * space complexity: O(1) constant >> count variable won't add extra space, mutating OG LL

// * first attempt: iterative solution
// this is an input class
class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// * first attempt:
const shiftLinkedList = (head, k) => {
  // initialize pointers
  let ogTail = head;
  let length = 1
  // iterate through LL while ogTail.next is not null
  while(ogTail.next !== null) {
    ogTail = ogTail.next;
    length += 1;
  }

  // calculate the position of the new tail
  // if k is positive = length - k
  // if k is negative = absolute value of k (or k positions from the beginning) 

  // calculate offset value --> in terms of giant numbers when using % operator (either from end or beginning) 
  const offset = Math.abs(k) % length;
  // * edge case if k = 0
  // check if offset is 0 -- if k = 0 or if k % length = 0
  if(offset === 0) return head;

  // use ternary to get new tail position
  const newTailPosition = k > 0 ? length - offset : offset;
  // grab new tail
  let newTail = head;
  // iterate up until newTailPosition
  for(let i = 1; i < newTailPosition; i += 1) {
    newTail = newTail.next;
  }

  // overwrite pointer values accordingly 
  const newHead = newTail.next;
  // safely overwrite new tail .next value
  newTail.next = null;
  ogTail.next = head;
  return newHead;
};