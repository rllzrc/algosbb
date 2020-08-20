// ** Day 20 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Reorder List !!! }

// T A SK !!!

// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// * first attempt: 
const reorderList = (head) => {
  // create a stack varaible
  const stack = [];
  let temp = head;
  // iterate through list
  while(temp) {
    stack.push(temp);
    temp = temp.next;
  }
  // create left and right pointer variables to keep track of index values
  let left = 0;
  let right = stack.length - 1;
  // iterate through while left is smaller than right
  while(left < right - 1) {
    // create variables to store nodes
    const leftNode = stack[left];
    const rightNode = stack[right];
    // create variables to store previous values
    const prevRightNode = stack[right - 1];
    const nextLeftNode = stack[left + 1];
    // reassign next values
    leftNode.next = rightNode;
    rightNode.next = nextLeftNode;
    prevRightNode.next = null;
    // decrement or increase left and right index values
    left += 1;
    right -= 1;
  }
};
