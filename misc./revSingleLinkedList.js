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

// * Approach #2, recursive solution using STACKS ~

// * Solution #2 stats:
// runtime complexity:
// * LINEAR --> O(n)
// memory complexity:
// * LINEAR as well --> O(n)

// * KEY TAKEAWAYS:
// uses STACK
// OS allocates the memory, this solution can run out of memory for very large linked lists (billions of items)

// * during each recursive call: visit each node in the linked list until last node is met; last node will then be new head of revLinkedList, on the return path each node will append itself to the end of the partially formed reversed linked list.

// * TLDR of recursive call functionality:
// if you have a reversed linked list of all the nodes to the left of the current node, and the last node of reversed linked list is known, then inserting the current node as the next to last node will create a new reversed linked list. 
// return the head of new reversed linked list, trick is we dont need to explicitly track the last node
// next pointer in the current node is already pointing to the last node --> the stack will put them in order so just need to switch pointer values 

const revSingleLinkedList2 = head => {
  // no need to reverse if head is empty or if there's only one node
  if(!head || !head.next) {
    return head; 
  }

  // declare a new variable to store result of calling revSingleLinkedList2, passing it the head.next value 
  // the node following the parameter passed will then be reassigned to be the new .next value
  // the following node after will point to null (the end of the list)
  let reversedHead = revSingleLinkedList2(head.next);
  head.next.next = head;
  head.next = null;
  return reversedHead;
}

// let head_reverse = createLinkedList([7, 14, 21, 28]);
// console.log("Original:" , display(head_reverse));

// head_reverse = reverse(head_reverse);
// console.log("After Reverse:", display(head_reverse));
// Original: 7, 14, 21, 28
// After Reverse: 28, 21, 14, 7