// ** Day 16 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> {  Odd Even Linked List! }

// T A S K !!!

// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// * first attempt:

const oddEvenList = head => {
  // quick edge case check if head isn't a thing
  if(head === null) return null;

  // head for even linked list and another one for the odd
  let odd = head;
  let even = head.next;
  let evenHead = even;

  // check while even is not = null bc even is at end of list
  while(even !== null && even.next !== null) {
    odd.next = even.next;
    // keep moving to the next/new node
    // makes separate list one with odd and another with even nodes

    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  // connect the lists once formed above ^
  
  odd.next = evenHead;
  return head;
}