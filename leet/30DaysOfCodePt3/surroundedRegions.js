// ** Day 17 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Surrounded Regions! }

// T A S K!!
// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// * first attempt:
// similar to num of islands
// any Os on boundaries (first / last row and col) will not get converted
// same with regions that connect with boundaries, cannot be flipped
// perform a DFS to explore regions -> set Os to a special character to turn all the other Os into Xs
const solve = board => {
  // quick edge case check:
  if(board.length === 0 || board[0].length === 0) return;

  // create variables to store row and col info
  let rows = board.length;
  let cols = board[0].length;

  // iterate through the and check first and last column
  // find if any Os are in the boundary
  // if so, perform DFS on surrounding region
  for(let i = 0; i < rows; i += 1) {
    // check if Os are on the boundary on the first col
    if(board[i][0] === 'O') {
      boundaryDFS(board, i, 0);
    }

    // check if Os are on the boundary in the last col
    if(board[i][cols - 1] === 'O') {
      boundaryDFS(board, i, cols-1);
    }
  }

  // iterate through the cols -> just the top and bottom row since we are simply checking for Os within the boundary
  for(let k = 0; k < cols; k += 1) {
    // check if there are any Os on the boundary of the first row
    if(board[0][k] === 'O') {
      boundaryDFS(board, 0, k);
    }

    // check if there are any Os on the boundary of the last row
    if(board[rows - 1][k] === 'O') {
      boundaryDFS(board, rows-1, k);
    }
  }

  // loop through each row and col (entire grid)
  // outer loop is for the rows
  for(let i = 0; i < rows; i += 1) {
    // inner loop is for the cols
    for(let k = 0; k < cols; k += 1) {
      // check if current element is an X or an O
      if(board[i][k] === 'O') {
        // if it is an O but is not in the boundary and surrounded by Xs, flip it
        board[i][k] = 'X';
      } else if(board[i][k] === '*') {
        // if it is a special character, it is within the boarder so flip back to an O
        board[i][k] = 'O';
      }
    }
  }
}

// helper function to perform DFS
const boundaryDFS = (board, i, k) => {
  // quick edge case check; make sure its within the boundaries
  if(i > board.length-1 || i < 0 || k > board[0].length || k < 0) return;

  // perform a check of all cardinal directions -> all surrounding regions
  if(board[i][k] === 'O') {
    // reassign to become a special character
    board[i][k] = '*';
  }

  // check each direction; check to the left
  if(i > 0 && board[i - 1][k] === 'O') {
    boundaryDFS(board, i - 1, k);
  }

  // check each surrounding direction; check to the right
  if(i < board.length-1 && board[i + 1][k] === 'O') {
    boundaryDFS(board, i + 1, k);
  }

  // check each surrounding direction; check below
  if(k > 0 && board[i][k - 1] === 'O') {
    boundaryDFS(board, i, k - 1);
  }

  // check each surrounding direction; check above;
  if(k < board[0].length-1 && board[i][k + 1] === 'O') {
    boundaryDFS(board, i, k + 1);
  }

  return;
}