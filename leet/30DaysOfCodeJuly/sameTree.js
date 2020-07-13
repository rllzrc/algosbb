// ** Day 13 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Same Tree! }

// T A S K !!
// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//

// base case: check if tree exists, are these trees null? return true, else false
// root the same?
// check left and right node subtrees values

// * first attempt: using recursion
// time complexity:
// * O(n)
const isSameTree = (p, q) => {
  // base case
  if(p === null && q === null) {
    return true
  } else if(p === null || q === null) {
    return false; 
  } else if(p.val !== q.val) {
    return false;
  } else {
    // run recursive call/case
    // verify left and right subtrees are the same
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};

// * test cases!!
console.log(isSameTree([1,2,3], [1,2,3])); // -> true
console.log(isSameTree([1,2],[1,null,2])); // -> false
console.log(isSameTree([1,2,1], [1,1,2])); // -> false