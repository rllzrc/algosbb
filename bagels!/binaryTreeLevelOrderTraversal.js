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

// * second attempt: remove unshift operation and keep it clean bb ~

const levelOrder = root => {
  // quick edge case check if root is not a thing
  if(!root) return [];
  //initiate a result variable to hold on to items to return out
  const result = [];
  // create a queue system by passing in root
  let queue = [ root ];

  // loop through the length of the queue
  while(queue.length) {
    // create a variable to store current level in
    let currentLevel = [];
    // have a second queue track the children in that node
    let queue2 = [];

    // loop again to check left and right values within current node/level and add it to the queue so we can process its children
    for(let i = 0; i < queue.length; i += 1) {
      currentLevel.push(queue[i].val);
      console.log('current level in the forloop', currentLevel);
      // check left leaf, if a thing push to queue 2
      if(queue[i].left) {
        queue2.push(queue[i].left);
      }
      // same logic as above, just checking right side now
      if(queue[i].right) {
        queue2.push(queue[i].right);
      }
    }
    result.push(currentLevel);
    // reassign queue to the values we constructed with queue2
    queue = queue2; 
  }
  return result; 
}