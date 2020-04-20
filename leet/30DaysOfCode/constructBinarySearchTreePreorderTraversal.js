// * Day 20!! --> Construct Binary Search Tree from Preorder Traversal

// TASK !!

// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// * Example 1:
// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

// * Definition for a binary tree node.
// * function TreeNode(val) {
// *     this.val = val;
// *     this.left = this.right = null;
// * }

// construct a tree based on preorder array of values
// preorder = type of traversal / what order the root is traversed
// * preorder --> pre left and right nodes order >> root - left - right --> first node is the first element in arr
// in order --> left - root - right
// post order --> left - right - root 

// * first attempt:
// using helper function to append to TreeNode
const bstFromPreorder = preorder => {
  // create a new tree from constructor
  // first item in preorder arr will be the root
  let root = new TreeNode(preorder[0]);

  // loop through preorder array
  for(let i = 1; i < preorder.length; i += 1) {
    bstFromPreorderHelper(root, preorder[i]);
  }
  return root;
}

// create a helper function to perform traversal appending to the tree node
const bstFromPreorderHelper = (root, val) => {
  // edge case check
  if(val <= root.val) {
    if(root.left) {
    bstFromPreorderHelper(root.left, val) 
    } else {
      root.left = new TreeNode(val);
    }
  } else {
    if(root.right) {
      bstFromPreorderHelper(root.right, val);
    } else {
      root.right = new TreeNode(val);
    }
  }
}

// * test cases! 

console.log(bstFromPreorder([8,5,1,7,10,12])); // --> [8,5,10,1,7,null,12]
console.log(bstFromPreorder([3,9,20,15,7])); // --> [9,3,15,20,7]