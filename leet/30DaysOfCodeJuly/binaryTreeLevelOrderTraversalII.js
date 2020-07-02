// ** Day 2 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Binary Tree Level Order Traversal II ! }

// T A S K !!
// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
// 3
// / \
// 9  20
//  /  \
// 15   7

// return its bottom-up level order traversal as:

// [
// [15,7],
// [9,20],
// [3]
// ]

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

// * first attempt:
const levelOrderBottom = root => {
  // quick edge case check
  if(!root) return [];

  const output = [];
  const queue = [[root, 0]];

  while(queue.length) {
    const [node, k] = queue.shift();

    if(!output[k]) {
      result[k] = [node.val];
    } else {
      output[k].push(node.val);
    }

    if(node.left) queue.push([node.left, k + 1]);
    if(node.right) queue.push([node.right, k + 1]);
  }
  return output.reverse();
};
