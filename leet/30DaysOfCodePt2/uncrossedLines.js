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
const maxUncrossedLines = (A, B) => {
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