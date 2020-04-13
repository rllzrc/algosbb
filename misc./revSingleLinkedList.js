// * Reverse a Single Linked List

// The TASK!
// Reverse the singly linked list and return the pointer/reference to the head of the reversed linked list.

// Input / Description:
// We’re given the pointer/reference to the head of a singly linked list, reverse it and return the pointer/reference to the head of the reversed linked list.

// * HINTS / PRO-TIPS!

// * Linked Lists ~ STRUCTURE ~ --> two items
// 1. data type: integer
// 2. a pointer / reference to the next node
// Think about doing it iteratively in a sinlge pass
// Think about doing it recursively in a single pass

// * Solution #1 --> iteratively with WHILE LOOPS
// runtime complexity:
// * LINEAR, O(n) --> we can reverse it in a single pass
// memory complexity:
// * runtime is CONSTANT O(1) --> no extra memory required for this solution

// ~ ROADMAP:
// * If the linked list only contains 0 or 1 nodes, then the current list can be returned as it is. If there are two or more nodes, then the iterative solution starts with two pointers:
// 1. reversedList --> a pointer to already reversed linked list (initialized to head)
// 2. listToDo --> a pointer to the remaining list (initialized head.next)

// set reversedLinked.next to null; becomes last node in reversed linked list. reversedList will * always * point to the head of the newly reversed linked list
// at each iteration, listToDo --> pointer moves towards null, current node becomes the head of new reversed linked list and starts pointing to the previous head of the reversed linked list.
// loop ENDS when listToDo points to NULL and reversedList pointer is pointing to the new head 

// * Approach #1, iterative solution ~

const revSingleLinkedList = head => {

  // no need to reverse if head is null or if there's only one node
  if(!head || !head.next) {
    return head;
  }

  // declare variable to keep track of currentHead
  let currentHead = head.next;
  // declare variable to keep track of new reversed linked list
  let reversedList = head;
  // reversedList.next value set to null
  reversedList.next = null;

  // loop through current head --> while it exists, has a value
  while(currentHead) {
    // declare a temp variable to store current head as we start to reverse things up
    let temp = currentHead;
    currentHead = currentHead.next;
    // continue to reassign pointer values accordingly
    temp.next = reversedList;
    reversedList = temp; 
  }
  return reversedList;
}

// let head_reverse = createLinkedList([7, 14, 21, 28]);
// console.log("Original:" , display(head_reverse));

// head_reverse = reverse(head_reverse);
// console.log("After Reverse:", display(head_reverse));