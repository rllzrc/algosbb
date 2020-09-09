// * { Binary Search Tree Construction !! ~ }

// T A S K ~~
// Write a BST class for Binary Search Tree. The class should support:

// inserting values with the insert method.
// removing values with the remove method; this method should only remove the first instance of a given value.
// searching for values with the contains method

class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// binary tree --> elements have at most 2 children (every node at max only has 2 children)
// binary search tree (difference from above)  has root element, if value is less go left, else go right
// Time Complexity: O(n) -- n = # of nodes in the tree
// Space Complexity: O(n)
// * Level Order Traversal using BFS (from left to right, level by level)
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
    let levels = [];

    // loop again to check left and right values within current node/level and add it to the queue so we can process its children
    for(let i = 0; i < queue.length; i += 1) {
      currentLevel.push(queue[i].val);
      //console.log('current level in the forloop', currentLevel);
      // check left leaf, if a thing push to queue 2
      if(queue[i].left) {
        levels.push(queue[i].left);
      }
      // same logic as above, just checking right side now
      if(queue[i].right) {
        levels.push(queue[i].right);
      }
    }
    result.push(currentLevel);
    // reassign queue to the values we constructed with queue2
    queue = levels; 
  }
  return result; 
}

console.log(levelOrderBFS([3,9,20,null,null,15,7]));


