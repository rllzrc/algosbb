// ** Day 20 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Kth Smallest Element in A BST ! }

// T A S K !! ~
// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

// * first attempt:
// time complexity:
// * O(n) -> n is number of nodes in a tree
// space complexity:
// * O(n)

const kthSmallest = (root, k) => {
  // first smallest is all the way to the left
  // do an in order traversal and return the kth thing on the list

  // keep track of current element in order traveral -> index 0
  // result we want to return -> index 1
  const nums = [0,0];

  // run recursive funct passing in root, nums, and k values 
  inOrder(root, nums, k);

  // after recursive function does its thing, return out nums[1]
  return nums[1];
}

const inOrder = (root, nums, k) => {
  // base case to start
  if(root === null) return; 

  // otherwise, in order always goes left, so traverse there
  inOrder(root.left, nums, k);

  // check if we're at the kth value; check count of first value in nums array
  if(++nums[0] === k) {
    nums[1] = root.val;
    return;
  }

  // otherwise, in order on the right side
  inOrder(root.right, nums, k);

}

