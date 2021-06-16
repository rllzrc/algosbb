// ** Leetcode: Arrays Reps Challenge  ~ Linked List Edition ~
// ** --> { #206 Reverse Linked List }

// T A SK !!!

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// * first attempt ~
// * time complexity: O(N)
// * space complexity: O(1)
const reverseList = head => {
  // initial instinct -> traverse entire list
  // at each point, have another variable that stores the current value
  // this.val and this.next are given properties
  // so I want this.next to point to previous
  // currentNode -> hold this value and next pointer
  
  // edge case check
  if(!head) return null;
  // declare pointer variables outside the while loop to ensure we can proceed accordingly
  let previous = null;
  let currentNode = head; 
  while(currentNode) {
    // currentNode = 1, next is still pointing to 2
    let temp = currentNode.next // 2
    // [1] -> 2 // prev -> null = <- 1 2 <- temp
    currentNode.next = previous;
    previous = currentNode;
    currentNode = temp;
  }
  return previous;
};

// * recursive solution:
const reverseListRecursive = head => {
  
}
// notes for "naive" solution 
// time complexity: O(N^2)
// space complexity: O(N)

// go through LL --> put all nodes in array
// node.next = array[i - 1]

