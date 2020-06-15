// ** Day 15 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Search In A Binary Search Tree ! }

// T A S K

// Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

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
 * @param {number} val
 * @return {TreeNode}
 */
//

// either use DFS or BFS in pre order
// * first attempt:

const searchBST1 = (root, val) => {
  // quick edge case check:
  if(root === null) return null;
  if(root.val === val) return root; 

  // use recursion to search the left and right side of the tree
  
  // smaller values are on the left
  if(val < root.val) {
    return searchBST(root.left, val);
  } else {
    // if the value is larger, search the right side of the tree
    return searchBST(root.right, val);
  }
}

// * second attempt using while loops
const searchBST = (root, val) => {
  // quick edge case check:
  if(root === null) return null;
  if(root.val === val) return root;

  // create a variable to hold on to current node value
  let current = root;

  // iterate through while current has a value
  // if less than, check on the left side of the tree
  if(val < current.val) {
    current = current.left;
  } else if(val > current.val) {
    // if greater than, check on the right side of the tree
    current = current.right;
  } else {
    return current;
  }

  return null; 
}

// * third attempt: using recursion, v short version
const searchInBST= (root, val) => {

  // while loop it first:
  // while(root) {
  //   if(root.val === val) {
  //     return root;
  //   } else if (root.val < val) {
  //     root = root.right;
  //   } else {
  //     root = root.left;
  //   }
  // }
  // return null;

  if(!root || root.val === val) {
    return root; 
  }

  // use ternary and recursion 
  return root.val < val ? searchBST(root.right, val) : searchBST(root.left, val);
} 

