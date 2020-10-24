// ** Days of Code Challenge Part X  
// ** --> { Rotate List !!! }

// T A SK !!!

// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Input: string, length (num)
// Output: string
// Constraints: optimization 
// Edge Cases: if k + head are empty/null, and if only one element in LL

// * first attempt: 
const rotateRight = (head, k) => {
  // edge case
  if(!k || !head || !head.next) return head;
  let length = 1;
  let tail = head;
  // loop while tail has a next value
  while(tail.next) {
    // reassign values
    tail = tail.next;
    length += 1;
  }
  tail.next = head;
  k %= length;
  console.log(k);

  for(let i = 0; i < length - k; i += 1) {
    tail = tail.next
  }

  head = tail.next;
  tail.next = null;
  return head; 
};
