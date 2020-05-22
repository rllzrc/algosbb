// ** Day 20 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Count Square Submatrices with All Ones ! }

// T A S K ~ !!

// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

// Create an additive table that counts the sum of elements of submatrix with the superior corner at (0,0).
// Loop over all subsquares in O(n^3) and check if the sum make the whole array to be ones, if it checks then add 1 to the answer.

// * roadmap:
// look at 1x1 / 2x2 / 3x3 grid
// similar approach to maximal square challenge

// walk thru array and keep track of how many squares we have up to the current point
// look back at past values to see what the new sum will be
// at each sq, find the largest possible sq dimension 
// look 

// check previous row, columun, and digonal from current position 

// * first attempt:
const countSquares1 = matrix => {
  // initialize a count variable
  let count = 0;

  // initialize length of matrix for clarity when performing iteration, matrix[0] = row
  let mL = matrix.length;
  let col = matrix[0].length;

  // iterate through the matrix, outer loop will grab row section
  for(let i = 0; i < mL; i += 1) {
    // inner loop will grab each item in that specific row (col)
    for(let k = 0; k < col; k += 1) {
      // only do work when matrix[i][k] evaluates to true aka we found a 1!
      if(matrix[i][k]) {
        // i & k values will be true past the first row and column
        // if i and k values are both > 0. check the minimum value from left, up, upper-left in the matrix
        matrix[i][k] = 1 + (i && k ? Math.min(matrix[i][k - 1], matrix[i - 1][k - 1], matrix[i - 1][k]) : 0)
        // increment count accordingly:
        count += matrix[i][k];
      }
    }
  }
  return count;
}


// * second attempt:
const countSquares = matrix => {
  // initalize length variables for clarity when iterating
  const row = matrix.length;
  const col = matrix[0].length;

  // create a new matrix mirror to fill out later
  const mirror = [...Array(matrix[0].length)].map((e) => Array(matrix[0].length)); 

  // create a count variable to keep track of items in grid
  let count = 0;

  // iterate though the rows
  for(let i = 0; i < row; i += 1) {
    // iterate through the cols
    for(let k = 0; k < col; k += 1) {
      // if we reach a zero, we don't do anything
      // if we reach a 1, check for the minimum value in the row, previous col, and prev diagonal --> take the min of all 3 values and add +1 to it
      if(matrix[i - 1][k - 1] === 1) {
        mirror[i][k] = 1 + Math.floor(mirror[i][k - 1], mirror[i - 1][k], mirror[i - 1][k - 1]);
      }
      // increase count
      count += mirror[i][k]
    }
  }
  return count;
}



// * test cases !!! ~
console.log(countSquares([
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
])); // -> 15
console.log(countSquares([
  [1,0,1],
  [1,1,0],
  [1,1,0]
])); // -> 7