// ** Day 8 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Path Sum III! }

// T A S K 
// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000. 

// * first attempt: 
var pathSum = function(root, sum, presums = { '0': 1 }, prev = 0) {
  if (!root) return 0;
  let curr = prev + root.val;
  presums[curr] = (presums[curr] || 0) + 1;
  let res = (presums[curr - sum] || 0) - !sum;
  res += pathSum(root.left, sum, presums, curr) + pathSum(root.right, sum, presums, curr);
  presums[curr]--;
  return res;
};