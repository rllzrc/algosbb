// * Put Your Reps In!! --> Rotate Image

// T A S K !!
// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

const inputMatrix1 = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

const inputMatrix2 =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
]

// * first attempt:
// time complexity:
// * O(n) -> linear
// space complexity:
// * O(1) constant in place modification
// transpose matrix -> checkout for more practice -> only works for perfect squares
// loop through and perform a symetrical swap diagonally
// this will make the rows into cols but on the left side
// loop through each row, have two pointers and swap values 
const rotate1 = matrix => {
  // create a variable to hold on to the length of the matrix for cleaner solution later on 
  const length = matrix.length;

  // iterate through the matrix
  // first loop is for the rows
  for(let i = 0; i < length; i += 1) {
    // second loop is for cols, k will be set to i
    // to move along the rows accordingly
    for(let k = i; k < length; k += 1) {
      // perform switch aka transpose matrix
      // create a variable to hold on to value before transpose
      let temp = matrix[i][k];

      // matrix of current element will equal the swap value
      // col will act as a row for reference, swaps diagonally
      matrix[i][k] = matrix[k][i];
      matrix[k][i] = temp; 
    }
  }

  // use two pointer approach to swap values within rows
  for(let i = 0; i < length; i += 1) {
    for(let k = 0; k < (length / 2); k += 1) {
      // setup a temp to hold on to current element
      let temp = matrix[i][k];
      // same distance from beginning to end as you go towards the middle
      // the beginning col value will equal to the second 
      // get valid index and then position
      matrix[i][k] = matrix[i][length - 1 - k];
      matrix[i][length - 1 - k] = temp;
    }
  }

  return matrix;
}

// * second attempt:
const rotate = matrix => {
  // quick edge case check:
  if(!matrix.length) return null;
  if(matrix.length === 1) return matrix;

  // reassign matrix to perform transpose and flip
  matrix = transpose(matrix);
  matrix = flip(matrix);
}

// helper function for transposing matrix
const transpose = matrix => {
  // create a variable to store the length of the arr for cleaner code during loops
  const length = matrix.length;

  // iterate through the matrix
  // outer loop is for the rows
  for(let i = 0; i < length; i += 1) {
    // second or inner loop is for the cols
    for(let k = i + 1; k < length; k += 1) {
      // create a variable to hold on to matrix values prior to transpose
      let temp = matrix[k][i];
      // perform reassignment
      matrix[k][i] = matrix[i][k];
      matrix[i][k] = temp;
    }
  }
  return matrix;
}

// helper function to perform flip!
const flip = matrix => {
  // create index variables to keep track of later
  let i = 0;
  let j = matrix.length-1;
  const length = matrix.length;

  // iterate while i's val is less than k, or the length of the array
  while(i < j) {
    // loop through row and perform the flip 
    for(let k = 0; k < length; k += 1) {
      let temp = matrix[k][j];
      matrix[k][j] = matrix[k][i];
      matrix[k][i] = temp;
    }
    // increment values
    i += 1;
    j -= 1;
  }
}

// * test cases!!
console.log(rotate(inputMatrix1));
console.log(rotate(inputMatrix2));