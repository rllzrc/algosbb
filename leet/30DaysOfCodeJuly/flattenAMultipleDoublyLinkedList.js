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

// class Node { #"Every node has all of these pointers and they have to be updated accordingly"
//     constructor(val){
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//         this.child = null;
//     }
// }

// var flatten = function(head) {
//     if (!head) return;  #"If null, return"
//   let stack = [ head ]; #" Our Stack implementation, start out with the head inside of it"
//   let nodeHead = null; #"The variable we will use to link our nodes together below"

//   while (stack.length) { #" While the stack is not empty"
//       let node = stack.pop(); # "We must pop(LIFO), Our Current Node, and this is also how we escape out of the loop"

//       if (!nodeHead) { # "Our initial check for our variable, so we can start chaining them together"
//           nodeHead = node;
//       } else { #"Once we hit this line nodeHead is our previous node"
//           nodeHead.next = node;   #"Update the next pointer for our previous node, which is our current node"
//           node.prev = nodeHead; #"Update the current node's previous pointer, which is our previous node"
//           nodeHead = node; #"This is used to update the previous node for the next node popped off the stack"
//       }

//       if (node.next) stack.push(node.next)  #"You must push in the next pointer first if it exists"
//       if (node.child) stack.push(node.child) #"We push in the child after, because it will be popped off First if there is one"
//       node.child = null; #"We are flattening the nodes, so at the end of our checks we can safely update the child pointer to null"
//   }

//   return head;  #"Our head pointer is still valid, but all of its links have been updated, so all is well"
// };

// * test cases!!
console.log(flatten(head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12])); // [1,2,3,7,8,11,12,9,10,4,5,6]
console.log(flatten(head = [1,2,null,3])); // [1,3,2]
console.log(flatten(head = [])); // []