// * Day 11 of 30 days of Code! --> Diameter of Binary Tree ~

// TASK!

// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

//
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  *
//

// * first pass: 

const diameterOfBinaryTree = root => {
  let max = 0;

  const depthFirstMax = root => {
    // if rootis null, return 0 since no path
    if(root === null) return 0;
    // create and assign a var for left of the tree so its easier to call instead of root.left
    let left = depthFirstMax(root.left);
    // same thing with right side:
    let right = depthFirstMax(root.right);

    // if the path does not go through a root, simply add left and right to get max values
    max = Math.max(max, left + right); 

    // if path goes through the root, add 1 to inlcude root
    return Math.max(left, right) + 1;

    // since we have no idea if the path will go through a root / or not, get max paths between path going through one vs without
    depthFirstMax(root);
  }

  return max;
}

// * Second attempt via Depth-First Search 

// to calculate the depth of a node: 
// Math.max(dept of node left, depth of node right) + 1 --> to account for the node
// as we go through it, a path uses 1 + (depth of note left) + (depth of node right) nodes
// search through each node and remember the highest num of nodes used in each path
// the desired length will be this minus -1

const diameterOfBinaryTree = root => {

  let max = 1;

  const depthFirstMax = node => {
    if(node === null) {
      return 0;
    }

    let left = depthFirstMax(node.left);
    let right = depthFirstMax(node.right);

    max = Math.max(max, left + right + 1);
    return Math.max(left, right) + 1;
  }
  
  depthFirstMax(root);
  return max - 1;
}

