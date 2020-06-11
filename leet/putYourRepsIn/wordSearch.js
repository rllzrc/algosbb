// * Put Your Reps In! 
// *** Word Search -> #79

// T A S K !!
// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

// * first attempt:
// time complexity:
// * O(n) -> n = number of spaces on the grid
// space complexity:
// * O(n) -> depending on size of the board, worst case 
// look through grid; if we find the first letter of the word, run a DFS on that cell to find adjacent characters
const exist = (board, word) => {
  // iterate through board grid
  // first/outer loop for rows
  for(let i = 0; i < board.length; i += 1) {
    // second outer loop for cols
    for(let k = 0; k < board.length; k += 1) {
      // check if the cell we are on is equal to the first letter of our word
      // and if we find the remainder of the letters from the dfs function
      if(board[i][k] === word[0] && dfs(board, i, k, 0, word)) {
        return true;
      }
    }
  }
  return false;

  // create dfs function
  function dfs(board, i, k, count, word) {
    // check if we find the remainder of the word
    if(count === word.length) {
      return true;
    }

    // check if we go outside of the grid, stop recursive run -> establish bounadries

    // out of bounds above / out of bound below / to the left / to the right 

    // final check if the cell we are on is not equal to the character we are looking for
    if(i < 0 || i >= board.length || k < 0 || k >= board[i].length || board[i][k] !== word[count]) {
      return false;
    }

    // if we haven't found remainder of the word and still within bounds of the grid and we just found the character we're looking for:

    // create a variable to keep track of cells -> so that way we know the same letter cell cannot be used more than once
    let temp = board[i][k]
    board[i][k] = '';

    // perform recursion again from the current spot
    // i + 1 to traverse to the cell below 
    // i - traverse to the cell above, k + 1 moves to the right
    let found = dfs(board, i + 1, k, count + 1, word) || dfs(board, i - 1, k, count + 1, word) || dfs(board, i, k + 1, count + 1, word) || dfs(board, i, k - 1, count + 1, word);

    // restore previous value of board
    board[i][k] = temp;

    // did we find what we needed, true or false
    return found; 
  }
}


// * test cases:
console.log(exist(board, "ABCCED")); // -> true
console.log(exist(board, "SEE")); // -> true
console.log(exist(board, "ABCB")); // -> false