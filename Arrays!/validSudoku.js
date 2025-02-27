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
        // if its not empty, add it to the set! use strings to separate row from column, distinct row nums and strings to store in passed values
        const columnKey = current + ' found in column ' + k;
        const rowKey = current + ' found in row ' + i;

        // divide row by col to get current sub box of grid --> this will check for duplicate values:
        const gridKey = current + Math.floor(i / 3) + '-' + Math.floor(k / 3);

        console.log(cache);
        // return false if any of the above values have already been seen/is in the cache set
        if(cache.has(columnKey) || cache.has(rowKey) || cache.has(gridKey)) {
          return false;
        } else {
          // add them to the cache set if not yet found!
          cache.add(columnKey);
          cache.add(rowKey);
          cache.add(gridKey);
        }
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