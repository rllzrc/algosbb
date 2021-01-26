// ** AE: Binary Search Tree Reps Challenge
// ** --> { BST Traversal !!! }

// T A SK !!!

// Write three functions that take in a BST and an empty array, traverse the BST, add its nodes' values to the input array, and return that array. The three functions should traverse the BST using the in-order, pre-order, and post-order tree-traversal techniques, respectively.

// * N O T E:
// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or null. 

// * --- Roadmap --- *
// this is for the insertion method, but the same logic generally applies to the other two:
// compare values of nodes
// check if it is smaller/bigger to figure out which side of the tree to focus on (smaller = to the left / greater than or equal to = to the right)
// keep traversing down & compare until a spot is found

// * time complexity: O(N) -> N = # nodes in tree
// * space complexity: O(N) -> since using output array, if not O(D) -> d = depth of tree

function inOrderTraverse(tree, array) {
  // keep checking so long as nodes have value
  // if the tree value is none, don't do anything
  if(tree !== null) {
    // call inorder function on the left subtree, passing in the array
    // it will keep calling on tree.left.left until we hit the bottom branch or leaf nodes
    inOrderTraverse(tree.left, array)
    // then append to the array the current tree's value
    array.push(tree.value);
    // call it on the right subtree
    inOrderTraverse(tree.right, array); 
  }
  // to take care of edge cases, for initial time we call the inorder function
  return array; 
};

function preOrderTraverse(tree, array) {
  // base case
  if(tree !== null) {
    // definition of preorder: append current element to array
    array.push(tree.value);
    // call the preorder traverse on left
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
};

function postOrderTraverse(tree, array) {
  // base case 
  if(tree !== null) {
    // start postorder traversing the left
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array; 
};