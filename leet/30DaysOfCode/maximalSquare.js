// * Day 26 of 30 Days of Code --> Maximal Square!!

// TASK !!!

// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// * first attempt using dynamic programming:

// first create a DP matrix, same dimensions as the input matrix
// then, fill any number in the first row, column, with original number.
// at each cell, we will take the min value of the top left, left, and top + 1
// each time you see a 1, update max value
// return square version of max value

const maximalSquare = matrix => {
  // initaite a max variable to keep track of how many squares we've seen
  let max = 0;

  // create an empty new dp array matching the matrix size
  const mirror = [...Array(matrix[0].length)].map((e) => Array(matrix[0].length)); 

  // first loop --> iterate through rows
  for(let i = 0; i < matrix.length; i += 1) {
    // second loop --> iterate through cols
    for(let k = 0; k < matrix[0].length; k += 1) {
      // check if this is the first row/col
      if(i === 0 || k === 0) {
        // check if there's a 1 in the cell
        if(matrix[i][k] === '1') {
          // add 1 to mirror matrix
          mirror[i][k] = 1;
          // update max value
          max = Math.max(max, 1);
        } else {
          // fill 0 in the mirror cell
          mirror[i][k] = 0;
        }
      } else {
        // check if we found 1
        if(matrix[i][k] === '1') {
          // fill in mirror grid: the number at this cell is the min value of left, top, and top left + 1
          // that way there will only be a square if all of the surrounding areas are 1s
          mirror[i][k] = Math.min(mirror[i][k - 1], mirror[i - 1][k], mirror[i - 1][k - 1]) + 1;
          // update max value when necessary
          max = Math.max(max, mirror[i][k]);
        } else {
          // fill in 0 at the cell same as above
          mirror[i][k] = 0;
        }
      }
    }
  }
  return max * max;
}


// ** EXAMPLE:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

// * test cases!!
console.log(maximalSquare([[1,0,1,0,0], [1,0,1,1,1], [1,1,1,1,1], [1,0,0,1,0]])); // --> 4