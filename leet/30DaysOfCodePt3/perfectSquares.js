// ** Day 27 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Perfect Squares !!! }

// T A S K !!
// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

// * first attempt: using DP
const numSquares = n => {
  // create a new dp arr/grid
  const dp = new Array(n + 1).fill(0);

  // iterate through up until n
  for(let i = 1; i <= n; i += 1) {
    // create a variable to store minimum value
    let minVal = i; // all 1s
    let y = 1;
    let sq = 1;

    while(sq <= i) {
      // reassign minVal
      minVal = Math.min(minVal, 1 + dp[i - sq]);
      // increment y value
      y++;
      // reassign sq val
      sq = y*y;
    }
    dp[i] = minVal;
  }
  return dp[n];
}

// * test cases!!
console.log(numSquares(12)); // -> 3 (4 + 4 + 4)
console.log(numSquares(13)); // -> 2 (4 + 9)