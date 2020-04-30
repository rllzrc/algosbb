// * Day 29 of 30 Days of Code!!! ---> Binary Tree Maximum Path Sum

// TASK !!!
// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// * Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6

//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }


// no need to use the root
// any node, at least one, has to travel along a path connecting to parent-children nodes

// traverse on left and right sides
// keep a max variable tracker
// use a helper method --> current path sum that takes a node (root)
// update max w helper method
// no backtracking just connected nodes if going down can't go left and then up to right --> must be constant flow

// * first pass using recursion !
// runtime complexity:
// * O(n) --> linear where n is number of nodes we visit
// space complexity:
// * O(log(N)) --> recursion stack the size of the tree height for binary trees 
const maxPathSum = root => {
  // create a variable to keep track of max value
  let max = -Infinity; 
  
  const pathSum = root => {
    // quick edge case to check if node is null
    // this is your base case
    if(root === null) return 0;
  
    // check left and right trees recursively 
    // keep these values using left and right variables
    // these two calls are the main recursive calls
    // max is calculated bottom level to the root going upwards
    let left = Math.max(0, pathSum(root.left));
    let right = Math.max(0, pathSum(root.right));
    // reassign max values at the leaf nodes
    // only will be updated if its bigger than its previous value
    max = Math.max(max, left + right + root.val);
    return Math.max(left, right) + root.val;
  }

  // invoke helper function here, passing in the root
  pathSum(root);
  return max;

}



// * test cases!!
console.log(maxPathSum([1,2,3])); // --> 6
console.log(maxPathSum([[-10,9,20,null,null,15,7]])); // --> 42