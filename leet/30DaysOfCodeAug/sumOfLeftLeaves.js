// ** Day 24 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Sum of Left Leaves !!! }

// T A SK !!!

// Find the sum of all left leaves in a given binary tree.

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

// * first attempt: recursion
const sumOfLeftLeaves = (root) => {
  // base case
  if(!root || root === null) {
    return 0;
  } else if(root.left !== null && root.left.left === null && root.left.right === null) {
    return root.left.val + sumOfLeftLeaves(root.right);
  } else {
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
  }
};

