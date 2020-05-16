// * Put Your Reps In !! --> Valid Sudoku

// T A S K !!

// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// * NOTES!
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.


// * roadmap:
// make sure each row and cols don't have dupes
// along with the 3x3 square grids
// dealing with unique values? use a hash table or cache ! --> constant time lookups

//  * first attempt:
const isValidSudoku = board => {
  // create a new hash table to store values in
  const cache = new Set();

  // loop through the board! outer loop is for rows
  for(let i = 0; i < 9; i += 1) {
    // inner loop is to go through the columns
    for(let k = 0; k < 9; k += 1) {
      // create a curr variable to hold on to row and col values
      let current = board[i][k];
      // check if current value is not empty:
      if(current !== '.') {

        // check if the add method on set returns false, then we know there is a duplicate value in each row/col/subgrid

        // * using the opposite of this logic to make it more efficient:
        // if its not empty, add it to the set! use strings to separate row from column, distinct row nums and strings

        // divide row by col to get current sub box of grid --> this will check for duplicate values:
        if(!cache.add(current + ' found in row' + i) || !cache.add(current + ' found in column' + k) || !cache.add(current + ' found in subgrid/box' + i / 3 + '-' + k / 3)) return false;
      }
    }
  }
  return true;
}

// * test cases!!
console.log(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])); //-> true
console.log(isValidSudoku([
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])); // -> false