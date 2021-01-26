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

  // find the value 
  // then remove, but check its children values
  // default parameter passed to keep track of parent node
  remove(value, parentNode = null) {
    // decalre current node 
    let currentNode = this;
    while(currentNode !== null) {
      // if value is LESS than currentNode
      if(value < currentNode.value) {
        // keep track of parent node - to reassign child nodes 
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        // the meat and potatoes of this method!
        // 1st case: dealing with a node that has two children nodes
        // find the smallest value of the right subtree, replace it with the value we are trying to remove -> and then remove that smallest value
        if(currentNode.left !== null && currentNode.right !== null) {
          // set the current node's value = smallest value of right subtree
          currentNode.value = currentNode.right.getMinValue();
          // get rid of that small value, pass in the parent node since we always need to keep track of it, parent node should be the current node
          currentNode.right.remove(currentNode.value, currentNode);
        } else if(parentNode === null) {
          // root nodes dont have a parent node
          if(currentNode.left !== null) {
            // if left node -- replace all the values of left and right nodes with the left node's values - order matters! 
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left; 
          } else if(currentNode.right !== null) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
          // remove root node with no parent nodes or children nodes
          // essentially deleting the BST cause only one node
          // currentNode.value = null; -->  best to do nothing here
        }

        // if not dealing with root node case
        // at a node that doesnt have 2 children nodes, either only one child node OR none
        // check if this currentNode is a left child or a righ child
      } else if(parentNode.left === currentNode) {
          // we know its the left child of its parent node
          // parentNode.left should be reassigned to left child node (if it exists) otherwise, its the right child node
          parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right; 
        }
        // assigning right child of the parent nodes
        else if(parentNode.right = currentNode) {
          parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right; 
        }
        break;
      }
    }
    return this;
  }

  // helper method to get minimum value of nodes
  // traverses the right side of the tree
  // keeps going to the left until we reach the end
  // * time: O(long(N)) 
  // * space: o(1)
  getMinValue() {
    let currentNode = this;
    while(currentNode.left !== null) {
      // traverse the tree go all the way to the left
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}