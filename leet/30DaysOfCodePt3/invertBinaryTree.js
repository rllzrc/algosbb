// ** Day 1 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Invert Binary Tree ! }

// T A S K !!!
// Invert a binary tree.

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

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
 * @return {TreeNode}
 */
// 

// start from leaf node, swap left and right children accordingly
// move upwards using recursion
// base case: if root is null, return null
// run recurisve function on root.right and root.left

// * first attempt:
const invertTree = root => {
  // base case
  if(root === null) {
    return null;
  }

  // create left and right pointer variables, run recursive values on right and left
  let right = invertTree(root.right);
  let left = invertTree(root.left);

  // swap values to invert the tree 
  root.right = left;
  root.left = right;

  return root;
}

