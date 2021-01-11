// ** AE: Linked List Reps Challenge  
// ** --> { Rearrange Linked List !!! }

// T A SK !!!

// Write a function that takes in the head of a Singly Linked List and an integer k, rearranges the list in place (i.e., doesn't create a brand new list) around nodes with value k, and returns its new head. 

// Rearranging a Linked List around nodes with value k means moving all nodes with a value smaller than k before all nodes with value k and moving all nodes with a value greater than k after all nodes with value k. 

// All moved nodes should maintain their original relative ordering if possible. 

// Note that the linked list should be rearranged even if it doesn't have any nodes with value k. 

// Each linked list node has an integer value as well as a next node pointing to the next node in the list or to None / null if it's the tail of the list.

// You can assume that the input Linked List will always have at least one node; in other words, the head will never be None / null.

// * --- Roadmap --- *
// input: head of singly linked list = integer k
// output: return new head after rearranging 
// constraints: optimize, constant space (rearrange in place, no need to create a brand new list)
// edge cases: 

// * time complexity: O(N) >> N is the number of nodes in the list 
// * space complexity: O(1) constant 

// * this is the class of the input linked list
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// contruct 3 LLs >> small, equal, and greater
// will not store all pointers of the nodes, just storing their tails and head values >> update pointers in the respective list

const rearrangeLinkedList = (head, k) => {
  // * declare variables to store values 
  // initialize to null, must check pointer values later
  const smallListHead = null;
  const smallListTail = null;
  const equalListHead = null;
  const equalListTail = null;
  const greatListHead = null;
  const greatListTail = null; 

  // iterate through main LL to construct these 3 lists
  let node = head;
  while(node !== null) {
    // check node's value to determine what LL it will go to
    // aka the grow helper method comes into play to start constructing these 3 "buckets"
    if(node.value < k) {
      // dealing with nodes with a smaller value than k
      [smallListHead, smallListTail] = growLinkedList(smallListHead, smallListTail, node)
    } else if(node.value > k) {
      // dealing with node with a greater value than k 
      [greatListHead, greatListTail] = growLinkedList(greatListHead, greatListTail, node)
    } else {
      // dealing with nodes with equal value as k 
      [equalListHead, equalListTail] = growLinkedList(equalListHead, equalListTail, node)
    }

    // clean up pointers to avoid future bugs down the line during overwrites -- prevNode will point to our current node
    const prevNode = node;
    // to move on to the next node in the list, update current to point to the next node
    node = node.next;
    // now that we have reference to it (the next node)
    // overwrite current node's .next to be none or null (the node we were currently at to preemptively clean up those values to prevent any bugs down the line) 
    prevNode.next = null;
  }
  const [firstHead, firstTail] = connectLinkedLists(smallListHead, smallListTail, equalListHead, equalListTail);
}

// * helper function to construct the 3 buckets
const growLinkedList = (head, tail, node) => {
  let newHead = head;
  // in most cases newtail will be node passed in to maintain relative ordering condition per prompt guidelines 
  let newTail = node;

  // check if new head is null, update the new head value
  if(newHead === null) newHead = node; 
  // old tail points to the new tail to effectively contsruct the LL
  if(tail !== null) tail.next = node;

  // return tuple or destructured array
  return [newHead, newTail];
}

// * helper function to connect the 3 "buckets" into one LL
const connectLinkedLists = (headOne, tailOne, headTwo, tailTwo) => {
  
}