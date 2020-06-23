// ** Day 23 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Count Complete Tree Nodes }

// T A S K !!

// Given a complete binary tree, count the number of nodes.

// Note:

// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Input: 
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6

// Output: 6

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

// complete tree meaning all nodes have two children except for the last level, leftmost as possible
// have a left and right pointer to track nodes
// initially both are set to root, keep incrementing count
// 

// * first attempt: 
const countNodes1 = root => {
  // quick edge case/base case check:
  if(!root) return 0;

  // create a variable to initialize left and right pointers to root
  let left = root;
  let right = root;

  // create a counter variable to track the height of the left and right side of the tree
  // left and right most node --> if same the tree is complete and all levels are completely filled
  let counterLeft = 0;
  let counterRight = 0;

  // iterate and check while left does not equal null
  while(left) {
    // calculate the value of the deepest left most node
    counterLeft += 1;
    // reassign left pointer value to be next
    left = left.left;
  }

  // same as above but for the right side:
  while(right) {
    // calculate the value of the deepest right most node
    counterRight += 1;
    right = right.right;
  }

  // if both values are the same; the tree is not just complete but all levels are filled 2 raised to the power of height - 1
  // use left shift 1 by 1 = 2 (1<<1) -- 2 raised to the power of 1
  // can use 1 << counterRight - 1 will be the same
  if(counterLeft === counterRight) return (1 << counterLeft) - 1;
  // if it is not the same, perform recursive call add 1 and got each layer some may be complete some may not (mostly left)
  return 1 + countNodes(root.left) + countNodes(root.right);
}

// * second attempt for practice!
const countNodes = root => {
  // base case
  if(!root) return 0;

  // create pointer variables for left, right, and current
  let current = root
  let left = 1;
  let right = 1;

  // itereate and check while root.left is a thing
  while(current.left) {
    // if leaf/child nodes are found, increment left pointer
    left += 1;
    // reassign current to root of particular level
    current = root; 
  }

  // same as above but on the right side
  while(current.right) {
    right += 1;
    current = root; 
  }

  // if both pointer values are equal, we have a completely balanced tree
  if(left === right) {
    let total = 0;
    for(let i = 0; i < left; i += 1) {
      total += Math.pow(2, i);
    }
    return total;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
};