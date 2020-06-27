// ** Day 26 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Sum Root to Leaf Numbers!! }

// T A S K !!

// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// Note: A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//

// * first attempt: iterative pre-order traversal

// push root into stack
// while stack is not empty:
// pop out node from stack and update curr num
// if node = leaf update root-to-leaf sum
// push right and left child nodes into stack
// return root2leaf sum
const sumNumbers1 = root => {
  // create sum variable to return as result
  let root2Leaf = 0;
  // create a variable stack to hold on to nodes
  const stack = [(root, 0)];
  // iterate while stack is not empty
  while(stack) {
    // create root var and current pointer var
    let root = stack.pop();
    let currNum = stack.pop();

    // if root is not null
    if(root !== null) {
      // reassign current num
      currNum = currNum * 10 + root.val;
      
      // if it is a leaf, update root2leaf sum
      if(root.left !== null && root.right !== null) {
        root2Leaf += currNum;
      } else {
        stack.push((root.right, currNum));
        stack.push((root.left, currNum));
      }
    }
  }
  return root2Leaf;
}

// * second attempt:
const sumNumbers = root => {
  // traverse preorder 
  function traverse(root, num) {
    // quick edge case check
    if(!root) return null;
    // keep track of sum value
    num += root.val;
    // check left and right child nodes
    if(!root.left && !root.right) return +num;
    // run recursive function to both right and left values
    return traverse(root.left, num) + traverse(root.right, num);
  }
  return traverse(root, '');
}

// * test cases!!!
console.log(sumNumbers([1,2,3])); // -> 25
console.log(sumNumbers([4,9,0,5,1])); // -> 1026