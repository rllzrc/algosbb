// ** Day 31 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> {  Edit Distance ! }

// T A S K !!!

// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// * roadmap:
// need to convert word 1 to word 2 and calculate number of opertaions it needs to take to do so
// if the values are the same (characters) take the value from the diagonal
// if char is not the sanme: take min of (diagonal, upperRow, leftCol) + 1
// return the last cell at the end or length of word1 and word2 in matrix
// * first attempt:
const minDistance = (word1, word2) => {
  // create length variables
  const size1 = word1.length + 1;
  const size2 = word2.length + 1;

  console.log(size1, size2);
  // instantiate a new matrix dp, fill it with 0

  // iteratively:
  const dp = [];
  for(let i = 0; i < size1; i += 1) {
    dp[i] = new Array(size1).fill(0);
  }

  // const dp = Array(2).fill(0).map(() => Array(word2.length + 1, word1.length + 1).fill(0));
  console.log(dp);
}

// * test cases !!
console.log(minDistance(word1 = "horse", word2 = "ros")); // -> 3
//console.log(minDistance(word1 = "intention", word2 = "execution")); // -> 5