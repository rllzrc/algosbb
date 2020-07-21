// ** Day 21 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Word Search ! }

// T A S K !!
// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

// look through the grid
// if we find the first letter, do a DFS on that cell to try to find all the other characters we need
// * first attempt:
// time complexity:
// * O(n) -> n = number of cells in the grid
// space complexity:
// * modifying board in place but recursive calls add to the stack
// wors case: also O(n)
// create DFS helper function 
const dfs = (board, row, col, count, word) => {
  // check if we found the remainder of the word, count is equal to the word's length
  if(count === word.length) return true;
  // check if we have gone out of bounds
  // stop recursive calls

  // going out of bounds above, below, left, and right
  // if the cell we are on does not equal the character we are looking for
  if(i < 0 || i >= board.length || k < 0 || k >= board[i].length || board[i][k] !== word[count]) {
    return false;
  }

  // haven't found remainder of the letters in our word yet
  // still in grid
  // character we are looking for is just found
  // mark the cell we are currently on; mark it as an empty space
  // need to remember that value to add it back after the recusrive calls
  let temp = board[i][k];
  // set board to an empty space
  board[i][k] = '';
  // from this current spot can we find the remainder of the word
  // i + 1 so we can traverse on the row below (next)
  // i - 1 so we can traverse on the row above (prev)
  // k + 1 so we can traverse on the right side (cols) (next)
  // k - 1 so we can traverse on the left side (cols) (prev)
  let found = dfs(board, i + 1, k, count + 1, word) || dfs(board, i - 1, k, count + 1, word) || dfs(board, i, k + 1, count + 1, word) || dfs(board, i, k - 1, count + 1, board);

  // restore previous value of board at current cell
  // remember we set it to an empty space to avoid dupes
  board[i][k] = temp;
  // did we find the thing?
  return found;
}

const exist = (board, word) => {
  // quick edge case check
  if(board.length === 0 || !board || word.length === 0 || !word) {
    return false;
  }
  // iterate through the board
  // first loop is for the rows
  for(let i = 0; i < board.length; i += 1) {
    // second loop is for the cols
    for(let k = 0; k < board[i].length; k += 1) {
      // check if current cell we are on is equal to the first letter of our word and if we can find all the characters in our word, return true (DFS func)
      if(board[i][k] === word[0] && defaultStatus(board, i, k, 0, word)) {
        return true;
      } 
    }
  }
  return false;
}



// * test cases!!
console.log(exist(board, "ABCCED")); // -> true
console.log(exist(board, "SEE")); // -> true
console.log(exist(board, "ABCB")); // -> false