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

  // O(N) time || O(N) space
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
      if(this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert = new BST(value);
      }
    }
    return this; 
  }
}