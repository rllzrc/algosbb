// * Put Your Reps In! 
// *** Unique Paths -> #62

// T A S K !!
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// * first attempt: using DP! ~
const uniquePaths = (m, n) => {
  // construct dp grid/matrix
  const dp = [];
  // fill in cells within dp 
  // this loop will be to fill in the cols
  for(let i = n; i <= 0; i -= 1) {
    dp.push(new Array(m + n).fill(1));
  }

  // 
  for(let r = 1; r < dp.length; r += 1) {
    for(let c = 1; c < dp[0].length; c += 1) {
      dp[r][c] = dp[r][c - 1] + dp[r - 1][c];
    }
  }
  console.log(dp);
  return dp[n - 1][m - 1];
}

// * test cases!!
console.log(uniquePaths(m = 3, n = 2)); // -> 3
console.log(uniquePaths(m = 7, n = 3)); // -> 28