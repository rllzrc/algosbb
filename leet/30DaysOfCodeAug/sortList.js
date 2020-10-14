// ** Days of Code Challenge Part X  
// ** --> { Sort List !!! }

// T A S K !!!

// Given the head of a linked list, return the list after sorting it in ascending order.

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

// Algo: 
// Recursively split the original list into two halves. Split will continue until there is only one node in the linked list (divide phase). To split in two halves, find middle of list using fast/slow pointer approach. Then recursively sort each sublist + comnine it into a single sorted list. 

// * first attempt: 
const sortList = (head) => {
  // edge case
  if(head === null || head.next === null) return head;
  // create variables for mid, left, and right nodes
  const mid = getMid(head);
  const left = sortList(head);
  const right = sortList(mid);
  return mergeList(left, right);
};

const mergeList = (list1, list2) => {
  // create a variable to store dummy head
  const dummyHead = new ListNode();
  const tail = dummyHead;
  // iterate while both lists aren't null 
  while(list1 !== null && list2 !== null) {
    // check values via pointers, reassign accordingly
    if(list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
      tail = tail.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
      tail = tail.next;
    }
  }
  // check as if list1 is not null, reassign tail.next to be it else assign it to list2
  tail.next = (list1 !== null) ? list1 : list2;
  return dummyHead.next;
}

const getMid = head => {
  // assign a mid value
  const midPrev = null;
  // iterate while head and next vals are not empty
  while(head !== null && head.next !== null) {
    midPrev = (midPrev === null) ? head : midPrev.next;
    head = head.next.next;
  }
  const mid = midPrev.next;
  midPrev.next = null;
  return mid;
}
