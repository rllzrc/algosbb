// ** @mcrsft Linked List Reps Challenge  
// ** --> { intersection of two linked lists !!! }

// T A SK !!!

// Write a program to find the node at which the intersection of two singly linked lists begins.

// * --- Roadmap --- *
// input: two linked lists (head a, head b)
// output: reference of the node's value in which intersection occurs
// constraints: optimize, perform operations in place (must retain OG structure) 
// edge cases: if no intersection, return null. per the prompt, no cycles in given inputs + optimize -> preferably O(n) time + O(1) memory 

// * main squeeze:
// for first solution: use a hash table / set to store nodes in
// iterate first list, add node values to set
// iterate second list, check if current node is already in set, if so that is where the intersection is at so return that node
// else return null

// * time complexity: O(N) -> N = length of linked list -> traversing entire first list
// * space complexity: O(N) -> with use of set to keep track of nodes 

// * first solution: use a hash table
const getIntersectionNode = (headA, headB) => {
  // create a hash table to store nodes values
  const visited = new Set();
  // iterate through first list, populate visited set with nodes 
  while(headA !== null) {
    visited.add(headA);
    // set current to next value so we can keep going in the list 
    headA = headA.next;
  }
  // iterate through second list, check if current node is found in visited
  while(headB !== null) {
    if(visited.has(headB)) return headB;
    // else, keep moving down the list
    headB = headB.next;
  }
  return null;
};
