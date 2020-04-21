// * LeetCode Problem # 2 --> Add Two Numbers

// TASK !!

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// *** Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }

const addTwoNumbers = (l1, l2) => {
  // traverse lists at the same time
  // same value at each time end loop 
  // add new nodes into new LL
  
  let List = new ListNode(0);
  let head = List;
  let sum = 0;
  let carryOver = 0;

  while(l1 !== null || l2 !== null || sum > 0) {

    if(l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    
    if(l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    if(sum >= 10) {
      carryOver = 1;
      sum -= 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carryOver;
    carryOver = 0;
  }
  return List.next;
}




