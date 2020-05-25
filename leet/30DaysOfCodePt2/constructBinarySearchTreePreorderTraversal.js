// ** Day 24 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Construct Binary Search Tree from Preorder Traversal ! }

// T A S K !!

// solved for April challenge; attempting again for practice..(Day 20)
// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

// * first attempt!

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// preorder: root, left, right
// inorder: left, root, right -> ascending
// use recursion to find further nodes for left and right side
const bstFromPreorder = preorder => {
  // create an inorder list of bst by sorting
  const inorder = preorder.sort((a,b) => a - b);

  // create helper function
  bstInAndPreOrderHelper = (preorder, inorder) => {
    // declare variables to hold on to length values for clarity
    let lengthPre = preorder.length;
    let lengthIn = inorder.length;

    // check if length values are not the same as inorder, null, or = 0 --> aka base case ~
    if(lengthPre !== lengthIn || preorder === null || inorder === null || lengthPre === 0) {
      return null;
    };

    // define root values
    let root = new Treenode(preorder[0]);
    // to track where we are on the left and right sides
    let rootIndex = inorder.indexOf(root.val);

    // recursion will process all of the deeper nodes on left and right side
    root.left = bstInAndPreOrderHelper(preorder[rootIndex + 1], inorder[rootIndex]);

    root.right = bstInAndPreOrderHelper(preorder[rootIndex + 1], inorder([rootIndex + 1]));
  
    return root;
  }
  // return/invoke helper function using recursion
  return bstInAndPreOrderHelper(preorder, inorder);
}

// * second attempt:
// Depth-First traversal types -> visit the complete subtree of those divisions
// preorder/inorder -> types of order depending on the root
// pre: root, left, right
// inorder: left, root, right
// post: left, right, root

// * space complexity:
// O(n) -> being the height of the tree
const bstFromPreorder = preoroder => {
  // quick edge case check or base case 
  if(root === null) return;
  // visit the root -> create a new tree from constructor
  // first item in the preorder will be the root
  let root = new TreeNode(preoroder[0]);

  // iterate through the preorder list
  for(let i = 1; i < preoroder.length; i += 1) {
    // invoke helper/recursive function here:
    bstFromPreorderHelper(root, preoroder[i]);
  }

  return root;
}

// helper function to recursively check left and right subtrees
const bstFromPreorderHelper = (root, val) => {
  // quick edge case check as long as the root passed is the smaller value
  if(val <= root.val) {
    // vistit the left subtree
    // make sure it has a value
    if(root.left) {
      // invoke helper
      bstFromPreorderHelper(root.left, val) 
    } else {
      root.left = new TreeNode(val);
    }
  } else {
    // visit right subtree, make sure it has a value
    if(root.right) {
      // invoke helper on right side
      bstFromPreorderHelper(root.right, val);
    } else {
      // make another branch~
      root.right = new TreeNode(val);
    }
  }
}


// * test cases!
console.log(bstFromPreorder([8,5,1,7,10,12])); // -> [8,5,10,1,7,null,12]