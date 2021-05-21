// ** Leetcode: Arrays Reps Challenge  ~ Easy Matrix Edition ~
// ** --> { #867 Transpose Matrix }

// T A SK !!!

// Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// * first attempt ~
// * time complexity: 
// * space complexity: 

const transpose = matrix => {
  // switch row and columns
  // -1 [0,2] --> we moved: [2,0]

  // iterate 2x --> outer loop is for rows and inner will be for columns (cells) 
  // check the element' address (index value) then flip it
  // push new address into output array
  // at end return out

  const output = [];

  // "fill" in rectangle/square 
  while(output.length < matrix[0].length) {
    output.push(Array(matrix.length));
  }

  // [[undefined], [undefined], [undefined]]

  for(let r = 0; r < matrix.length; r += 1) {
    for(let c = 0; c < matrix[r].length; c += 1) {
      const current = matrix[r][c];
      // flip it!
      output[c][r] = current;
    }
  }
  return output; 
};