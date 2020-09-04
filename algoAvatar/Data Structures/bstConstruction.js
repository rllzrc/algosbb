// * { Binary Search Tree Construction !! ~ }

// T A S K ~~
// Write a BST class for Binary Search Tree. The class should support:

// inserting values with the insert method.
// removing values with the remove method; this method should only remove the first instance of a given value.
// searching for values with the contains method

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // O(n) time || O(n) space
  insert(value) {
    // conditional checks to see if value passed should go on the left or right side
    if(value < this.value) {
      // check if left is null since smaller values go on the left
      if(this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      // same as above, this time for the right side
      if(this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert = new BST(value);
      }
    }
    return this; 
  }

  // O(n) time || O(n) space
  contains(value) {
    if(value < this.value) {
      // check on left
      if(this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if(value > this.value) {
      if(this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }

  // O(n) time | O(n) space

}

// * BST Preorder Traversal 
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