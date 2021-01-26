// ** AE: Binary Search Tree Reps Challenge
// ** --> { BST Construction !!! }

// T A SK !!!

// Write a BST class for a Binary Search Tree. The class should support:

// - inserting values with the insert method
// - removing values with the remove method; this method should only remove the first instance of the given value
// - searching for values with the contains method

// * N O T E:
// You can't remove values from a single-node tree. In other words, calling the remove method on a single-node tree should simply not do anything.

// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property:

// * its value is STRICTLY GREATER than the values of every node to its left; its value is LESS THAN or EQUAL to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null. 

// * --- Roadmap --- *
// this is for the insertion method, but the same logic generally applies to the other two:
// compare values of nodes
// check if it is smaller/bigger to figure out which side of the tree to focus on (smaller = to the left / greater than or equal to = to the right)
// keep traversing down & compare until a spot is found

// * time complexity: avergae case => O(log(N)) || worst case => O(N)
// * space complexity: O(1) -> if done iteratively
// if using recursion: O(log(N)) || O(N) due to call stacks 

// * this is the class of the input linked list
// this will go over the iterative solution since it will provide a better space complexity 
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // * time: avg case -> O(log(N)) || worst case -> O(N)
  // * space: avg case ->  O(1) || worst case -> O(1) 
  insert(value) {
    // create a variable to keep track of current node
    let currentNode = this;
    while(true) {
      // check if value is LESS THAN current node, then we want to EXPLORE the LEFT SUBTREE
      if(value < currentNode.value) {
        // check if the left node is an actual node or at the end of the branch 
        if(currentNode.left === null) {
          // create a new branch that takes in the value we are trying to add
          currentNode.left = new BST(value);
          break;
        } else {
          // we still have left subtrees to explore
          currentNode = currentNode.left;
        }
      } else {
        // if GREATER THAN OR EQUAL TO, EXPLORE RIGHT SUBTREE
        if(currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this; 
  }

  // * time: O(log(N)) || worst case: O(N)
  // * space: O(1) 
  contains(value) {
    // create a variable to store current node's value
    let currentNode = this;
    // iterate while currentNode still has values
    while(currentNode !== null) {
      // perform conditional check, compare value passed with current node
      if(value < currentNode.value) {
        // LEFT = LESS than 
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        // RIGHT = GREATER than or EQUAL to
        currentNode = currentNode.right;
      } else {
        // we found it! they're equal to one another
        return true; 
      }
    }
    return false; 
  }

  remove(value) {

  }
}