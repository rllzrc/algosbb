// ** Day 10 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Flatten A Multiple Doubly Linked List !! }

// T A S K !!
// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

// * first attempt:
const flatten = head => {
  if(!head) return head;
    
  function traverse(node) {
      if(!node.next && !node.child) return node;
      
      if(node.child) {
          const nextNode = node.next;
          node.next = node.child;
          node.next.prev = node;
          node.child = null;
          
          if(nextNode) {
              const tailNode = traverse(node.next);
              tailNode.next = nextNode;
              nextNode.prev = tailNode;
          }
      }
      return traverse(node.next);
  }
  traverse(head);
  return head;
};


// * test cases!!
console.log(flatten(head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12])); // [1,2,3,7,8,11,12,9,10,4,5,6]
console.log(flatten(head = [1,2,null,3])); // [1,3,2]
console.log(flatten(head = [])); // []