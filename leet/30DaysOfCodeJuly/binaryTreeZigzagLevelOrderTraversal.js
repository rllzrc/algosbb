// ** Day 22 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Binary Tree Zigzag Level Order Traversal! }

// T A S K !!
// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
// 3
// / \
// 9  20
//  /  \
// 15   7

// return its zigzag level order traversal as:

// [
// [3],
// [20,9],
// [15,7]
// ]

// * first attempt: 
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
 * @return {number[][]}
 */
//

// if level % 2 === 1, append the root.val
// if level % 2 === 0, inseart root.val at index[0]
const zigzagLevelOrder = root => {
  // base case
  if(!root) return null;
  // create a result variable to store and return value out later
  let result = [];
  // create a level variable to keep track of where we are at
  let level = 0;
  
  // call helper function
  zigzagHelper(root, level, result);

  // create helper function for zigzagging
  function zigzagHelper(root, level, result) {
    // base case
    if(!root) return null;
    // create another array inside resulting array
    if(result.length < level + 1) {
      // make an empty array 
      // to created nested array values
      result.push([]);
    } 

    if(level % 2 === 1) {
      result[level].push(root.val);
    } else {
      // if the remainder is zero
      result[level].splice(0, root.val);
    }
  }
  
  // increment level each time
  zigzagHelper(root.right, level + 1, result);
  zigzagHelper(root.left, level + 1, result);

  return result; 
};