// ** AE: Graphs Reps Challenge  
// ** --> { youngest common ancestor !!! }

// T A SK !!!

// You're given three inputs, all of which are instances of an AncestralTree class that have an ancestor property pointing to their youngest ancestor. The first input is the top ancestor in an ancestral tree (ie the only instance that has no ancestor -- its ancestor property points to None / null) and the other two inputs are descendants in the ancestral tree.

// Write a function that returns the youngest common ancestor to the two descendants. Note that a descendant is considered its own ancestor. 

// input: references to the tree: 1. top ancestor (ancestor prop points to None) 2 & 3 are the other two descendats -- basically nodes
// output: return the node of the youngest common ancestor
// constraints: optimize
// edge cases: 

// * time complexity: O(N) >> N = depth (height) of the tree
// * space complexity: O(1) constant >> 

// * first attempt: iterative solution
// this is an input class
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

// * first attempt:
const getYoungestCommonAnestor = (topAncestor, descendantOne, descendantTwo) => {
  // initalize pointers
  // * instead of pointing both at the head, start with these values other wise we will hit the while loop condition almost immediately 
  let first = head.next;
  let second = head.next.next;
  // iterate while first is not equal to second
  while(first !== second) {
    // move pointers accordingly
    first = first.next;
    // second moves two slots over
    second = second.next.next;
  };
  // next, to travel the remainder of the distance until the origin of the loop --> pro-tip: remainder = equal to the distance between the start of the LL and the origin of the loop
  // grab first pointer and bring back to the beginning of LL
  first = head;
  // iterate while first is not equal to second
  // move at the same time
  while(first !== second) {
    // now both travels at the same pace
    first = first.next;
    second = second.next;
  };
  // once they overlap, they will converge into the origin of the loop
  return first; 
};