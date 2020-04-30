// * Last Challenge! 30 out of 30 for 30 Days of Code in April --> Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree

import { ninvoke } from "q";

// TASK !! 

// Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree. 

// We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.

// * Example:
// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
// Output: true
// Explanation: 
// The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
// Other valid sequences are: 
// 0 -> 1 -> 1 -> 0 
// 0 -> 0 -> 0

// ** HINTS!
// Depth-first search (DFS) with the parameters: current node in the binary tree and current position in the array of integers.
// When reaching at final position check if it is a leaf node.

// * first pass w recursion
// basecase if root === null return false
// check if length of arr is 0 
// value of leaf node should be equal to the last element of the array (bubbles up)
// left and right vals should be none

// from root check if first element is equal to first element in array
// check second eleement and see if left and right are eqaul to it, so forth

// if index < length of array and root.value = arr[i] --> check root left and right

var isValidSequence1 = function(root, arr) {
  // initiate two variables to keep track of length and index
  let length = arr.length;
  let index = 0;

  // helper function 
  const checkPath = (root, arr, length, index) => {
    // check if root is null
    if(root === null) return 0;

    // check if index is equal to last el in arr
    if(index === length-1 && root.left === null && root.right === null && root.val === arr[i]) {
      return true;
    }

    // check left and right leaves
    if(index < length && root.val === arr[i]) {
      return checkPath(root.left, arr, length, i + 1)
    }
  }
};

// * second pass:
const isValidSequence = (root, arr) => {
  // quick edge case check if root is null
  if(root === null && arr.length === 0) {
    return isValidSequence(root, arr, 0);
  }

  const isValid = (root, arr, index) => {
    // check for invalid cases
    if(root.val !== arr[i]) return false;
    // if the value is equal to the last element in the array
    if(index === arr.length-1) {
      return root.left === null && root.right === null;
    }

    // continue matching as long as i < arr.length
    if (root.left !== null && isValid(root.left, arr, i + 1)) {
      return true;
    }

    if(root.right !== null && isValid(root.right, arr, i + 1)) {
      return true;
    }
    return false;
  }
}