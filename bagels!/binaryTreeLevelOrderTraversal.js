// * Bagels Group LeetCode Challenge --> Binary Tree Level Order Traversal

// TASK !!!
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// * Definition for a binary tree node.
// * function TreeNode(val, left, right) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.left = (left===undefined ? null : left)
// *     this.right = (right===undefined ? null : right)
// * }

// ** EXAMPLE!
// Given binary tree INPUT: [3,9,20,null,null,15,7]
// OUTPUT: [[3], [9,20], [15,7]]

// * first approach:
// BFS --> breadth first search

var levelOrder = function(root) {
  // initiate a return value
  let result = [];

  // quick edge case to check if root = null
  if(!root) {
    return result;
  }

  // * BFS takes advantage of queues, like a line! FIFO --> first in first out
  let queue = [];
  // add root to queue
  queue.push(root);

  // loop through queue while its not empty
  while(queue.length > 0) {
    // first iteration will only have one node since its the root, second 2 nodes to process etc
    // this will be the numer of nodes to go through
    let nodeSize = queue.length;
    // this will hold all of the nodes values we need to process
    let currentLevel = [];

    // iterate through all of the elements in the queue
    while(nodeSize > 0) {
      // get the current node to process
      let current = queue.shift();

      // look at the current node and see if it has a left and right value
      if(current.left) {
        // add it to queue so we can process nodes' children
        queue.push(current.left);
      }

      // same logic as above but now with right side
      if(current.right) {
        queue.push(current.right);
      }

      currentLevel.push(current.val);
      nodeSize -= 1;
    }
    result.push(currentLevel);
  }
  return result;
};








var levelOrder = function(root) {
  if(!root) return []
  
  let queue = []
  queue.push(root)
  let result = []
  
  while(queue.length > 0) {
      let row = []
      let numsOfNode = queue.length
  
      while(numsOfNode > 0) {
          let currentNode = queue.shift()
          
          if(currentNode.left) {
              queue.push(currentNode.left)
          }
          if(currentNode.right){
              queue.push(currentNode.right)
          }
          row.push(currentNode.val)
          numsOfNode--
      }
      result.push(row)
  }
  
  return result
};
