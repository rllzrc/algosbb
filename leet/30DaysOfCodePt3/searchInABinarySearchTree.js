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

const searchBST = (root, val) => {
  // quick edge case check:
  if(root === null) return null;
  if(!root.val === val) return root; 

  // use recursion to search the left and right side of the tree
  
  // smaller values are on the left
  if(val < root.val) {
    return searchBST(root.left, val);
  } else {
    // if the value is larger, search the right side of the tree
    return searchBST(root.right, val);
  }
}

