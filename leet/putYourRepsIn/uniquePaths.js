// * Put Your Reps In! 
// *** Unique Paths -> #62

// T A S K !!
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// * first attempt: using DP! ~
const uniquePaths1 = (m, n) => {
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

// * second attempt: still using DP
const uniquePaths = (m, n) => {
  // create a variable to construct grid/matrix dp
  const dp = [];
  // fill in row and cols
  // first outer loop will be the rows
  for(let i = 0; i < m; i += 1) {
    dp.push(new Array(m).fill(1));
  }

  // set row and col to be 1 to create the buffer
  dp[0] = Array(n).fill(1);

  // build out the row and cols, the # of paths is = to the paths' cell above and to the left.
  for(let i = 1; i < dp.length; i += 1) {
    for(let k = 1; k < dp[0].length; k += 1) {
      dp[i][k] = dp[i - 1][k] + dp[i][k - 1];
      //console.log('dp@0:', dp[0]);
    }
  }
  console.log(dp);
  return dp[m - 1][n - 1];
}

// 

// * test cases!!
//console.log(uniquePaths(m = 3, n = 2)); // -> 3
console.log(uniquePaths(m = 7, n = 3)); // -> 28