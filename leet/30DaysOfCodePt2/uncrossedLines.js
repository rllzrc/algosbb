// ** Day 25 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Uncrossed Lines ! }

// T A S K !!
// We write the integers of A and B (in the order they are given) on two separate horizontal lines.

// Now, we may draw connecting lines: a straight line connecting two numbers A[i] and B[j] such that:

// A[i] == B[j];
// The line we draw does not intersect any other connecting (non-horizontal) line.
// Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.

// Return the maximum number of connecting lines we can draw in this way.

// * first attempt:
const maxUncrossedLines1 = (A, B) => {
  // declare two pointer variables to keep track of length
  let a = A.length;
  let b = B.length;

  // construct DP helper function
  const maxUncrossedHelper = (i = 0, k = 0) => {
    if(i === a || k === b) {
      return 0;
    }
    return Math.max(
      maxUncrossedHelper(i + 1, k + 1) + Number(A[i] === B[k]), 
      maxUncrossedHelper(i, k + 1), maxUncrossedHelper(i + 1, k)
    );
  };
  return maxUncrossedHelper();
};

// * second attempt:
const maxUncrossedLines = (A, B) => {
  // quick edge case check/base case
  if(A === null || B === null || A.length === 0 || B.length === 0) {
    return 0;
  }

  // create dp matrix to store values
  const dp = new Array(A.length + 1, B.length + 1);

  // iterate through A's values/subgrids -- aka the rows
  for(let i = 1; i <= A.length; i += 1) {
    // loop through B's values -- aka the cols
    for(let k = 1; k <= B.length; k += 1) {
      // check if the current element in A is equal to B
      if(A[i - 1] === B[k - 1]) {
        // reassign the i and k values
        dp[i][k] = 1 + dp[i - 1][k - 1];
      } else {
        dp[i][k] = Math.max(dp[i][k - 1], dp[i - 1][k]);
      }
    }
  }
  return dp[A.length][B.length];
}

// 