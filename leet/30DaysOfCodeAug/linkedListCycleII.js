// ** Days of Code Challenge Part X  
// ** --> { Linked List Cycle II !!! }

// T A S K !
// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.

// Follow up:

// Can you solve it using O(1) (i.e. constant) memory?

const detectCycle = head => {
  if (head == null || head.next == null) return null;
    
  let slow = head;
  let fast = head;
  
  while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) break;
  };
  
  if (fast == null || fast.next == null) return null;
  
  slow = head;
  
  while (slow != fast) {
      slow = slow.next;
      fast = fast.next;
  }
  
  return slow;
};
