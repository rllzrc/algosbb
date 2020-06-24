// ** Day 24 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Unique Binary Search Trees ! }

// T A S K !!

// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// Example:

// Input: 3
// Output: 5
// Explanation:
// Given n = 3, there are a total of 5 unique BST's:

//    1         3     3      2      1
//     \       /     /      / \      \
//      3     2     1      1   3      2
//     /     /       \                 \
//    2     1         2                 3

// * first attempt: using Dynamic Programming
// enumerate each num [i] in the sequence, use that num as the root
// then the subsequence 1... (i - 1) on left side would go on the left side or branch of the root and right subsequence will go (i + 1) 
// construct each subtree from the subsequence recursively
// this will ensure that all BSTs constructed are unique, since they start from unique roots

// time complexity:
// * O(N^2) -> numnber of iterations for the statement below
// space complexity:
// * O(N) -> linear, storage to keep all the intermediate solutions
const numTrees1 = n => {
  // create a variable to keep track of enumeration in sequence
  const sequences = new Array(n + 1).fill(0);

  // add default values
  sequences[0] = 1;
  sequences[1] = 1;

  for(let i = 2; i <= n; i += 1) {
    for(let k = 1; k <= i; k += 1) {
      sequences[i] += sequences[k - 1] * sequences[i - k];
    }
  }

  // calculate the product of left and right values by mixing and matching different combos of BST. Return the length of elements we are dealing with 
  return sequences[n];
}

// * second attempt: math-y deduction~
// this sequence actually results in what is known as a Catalan Number
const numTrees = n => {
  // create a variable for catalan
  let c = 1;

  // iterate up until n value
  for(let i = 0; i < n; i += 1) {
    // reassign c's value and do all the fun math stuff!
    c = c * 2 * (2 * i + 1) / (i + 2);
  }

  return c; 
}