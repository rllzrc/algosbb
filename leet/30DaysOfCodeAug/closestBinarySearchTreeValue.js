// ** Day 8 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Closest Binary Search Tree Value ! }

// T A S K !!!
// Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

// Note:

//     Given target value is a floating point.
//     You are guaranteed to have only one unique value in the BST that is closest to the target.

// * first attempt: recursive call using global closest variable

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
//  * @param {TreeNode} root
//  * @param {number} target
//  * @return {number}
 */
//

const closestValue = (root, target) => {
  // create a variable to store closest val
  let closest = root.val;
  return traverseBST(root);
  // define helper traversal function
  function traverseBST(node) {
    // base case 
    if(node === null) return closest;
    // reassign closest value
    closest = Math.abs(node.val - target) < Math.abs(closest - target) ? node.val : closest;

    // check conditionals
    if(closest === target) return closest;
    if(node.val > target) return traverseBST(node.left);
    if(node.val < target) return traverseBST(node.right);

    return;
  }
};