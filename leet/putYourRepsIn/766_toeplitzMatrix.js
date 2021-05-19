// ** Leetcode: Arrays Reps Challenge  ~ Easy Matrix Edition ~
// ** --> { #766 Toeplitz Matrix }

// T A SK !!!

// Given an m * n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
// A matrix toeplitz if every diagonal from top-left to bottom-right has the same elements.

// * first attempt ~
// * time complexity: -- time limit exceeded --
// * space complexity: -- ugh revamping to version ii --

const isToeplitzMatrix = matrix => {
  // start at top left, check directly to bottom right and see if it is the same
  // an array of arrays --> first row[0] second row[1]
    
  // edge case: can I expect the matrix to always be valid? should I return true or false if we didn't have anything? 
    
  // iterate through the matrix
  // outer loop will go through the "rows" ie [1,2,3,4], [5,1,2,3], [9,5,1,2]
  for(let r = 1; r < matrix.length; r += 1) {
    // check each column
    // you can also do matrix[r].length instead of matrix[0].length bc its m * n the latter will work 
    // you can also try something like const row = matrix[r] here to help you out later
    // const row = matrix[r];
    for(let c = 1; c < matrix[0].length; c += 1) {
      // check for inequality in regards to top-left element in respect to current element
      const current = matrix[r][c]; // first row in the matrix
      if(current !== matrix[r - 1][c - 1]) return false;
    }
  }
  return true; 
};