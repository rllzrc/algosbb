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
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}