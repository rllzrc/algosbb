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
// * for second solution:
// v similar to find loop concept
// initialize 2 pointers, first and second
// while they are not the same
// advance pointers by 1
// if first hits the end, reassign it to head of 2
// same w second but reversed
// if it intersects, it will eventually meet at the same point if not it will just return null

// * time complexity: O(N + M) -> N = length of linked list -> traversing entire first list / M = length of the second list
// * space complexity: O(N) -> with use of set to keep track of nodes 

// * first solution: use a hash table
const getIntersectionNode1 = (headA, headB) => {
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

// * second solution: optimized 
// * time: O(M + N)
// * space: O(1) -> no extra auxiliary data structure used >> just pointers ~
const getIntersectionNode = (headA, headB) => {
  // quick edge case check:
  if(headA === null || headB === null) return null;
  // initalize pointers, both start at the head of each list
  let first = headA;
  let second = headB;
  // iterate through while both lists have values
  while(first !== second) {
    // move pointers along by 1
    first = first.next;
    second = second.next;
    // check comparison
    if(first === second) return first;
    // check if first has reached the end
    if(first === null) {
      // reassign first to start at the head of the second list
      first = headB;
    }
    // similar logic but in reverse for the second list
    if(second === null) {
      second = headA;
    }
  }
  return first; 
};


