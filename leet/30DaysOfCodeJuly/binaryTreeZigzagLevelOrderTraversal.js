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
const zigzagLevelOrder1 = root => {
  // base case
  if(!root) return [];
  // create a result variable to store and return value out later
  let result = [];
  // create a level variable to keep track of where we are at
  let level = 0;
  
  // call helper function
  zigzagHelper(root, level, result);
  return result;
}

// create helper function for zigzagging
function zigzagHelper(root, level, result) {
  // base case
  if(!root) return [];
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
    result[level].unshift(root.val);
  }
  // increment level each time
  zigzagHelper(root.right, level + 1, result);
  zigzagHelper(root.left, level + 1, result);
}

// * secong attempt: clean up above code, using BFS
// run two level nested loop, outer iterates each level on the tree and inner iterates on each node within second level
// single loop: append nodes to be visited into a queue DS and separate nodes with some sort of delimiter
// left to right: use FIFO
// append new tail to the queue so that the element that comes later will be in the proper position 
const zigzagLevelOrder = root => {
  // base case
  if(!root) return [];
  // create a result variable 
  const result = [];
  // create a depth variable to keep track of where we are at
  let depth = 0;
  // create a queue data structure to keep track of levels
  let queue = [root];
  // iterate through while queue has elements in it
  while(queue.length > 0) {
    // create a variable to hold on to sz of queue
    const size = queue.length; 
    // create a level variable to keep track
    const level = [];

    // iterate through queue 
    for(let i = 0; i < size; i += 1) {
      const node = queue.shift();
      // if the depth we are at is divisible by 2, push the current node to level
      if(depth % 2 === 0) {
        level.push(node.val);
      } else {
        // unshift and put it in the front of the level array
        level.unshift(node.val);
      }

      // check the children nodes
      if(root.left) queue.push(root.left);
      if(root.right) queue.push(root.right);
    }

    result.push(level);
    // increment depth after each level 
    depth += 1;
  }
  return result;
};