// ** Day 21 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Dungeon Game! }

// T A S K !!

// The demons had captured the princess (P) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (K) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

// The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

// Some of the rooms are guarded by demons, so the knight loses health (negative integers) upon entering these rooms; other rooms are either empty (0's) or contain magic orbs that increase the knight's health (positive integers).

// In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

// Write a function to determine the knight's minimum initial health so that he is able to rescue the princess.

// For example, given the dungeon below, the initial health of the knight must be at least 7 if he follows the optimal path RIGHT-> RIGHT -> DOWN -> DOWN.

// -2 (K)	-3	3
// -5	-10	1
// 10	30	-5 (P)

// N O T E ~

// The knight's health has no upper bound.
// Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.

// * first attempt:
const calculateMinimumHP = dungeon => {
  // create a variable to store length of dungeon matrix -> row and cols
  const rows = dungeon.length;
  const cols = dungeon[0].length;

  // create a solution matrix of the same size
  const matrix = new Array(rows);

  // fill in values of matrix temp
  for(let i = 0; i < rows; i += 1) {
    matrix[i] = new Array(cols).fill(undefined);
  }

  // run DP helper function
  return dp(0, 0);

  // create dp helper function:
  function dp(row, col) {
    // base case - quick edge case check:
    if(row === rows - 1 && col === cols - 1) {
      // if cell value is greater than 0, fill it with 1 (min health) or 1 - dungeon[r-1][c-1] subtract it (absolute value)
      return (dungeon[row][col] > 0 ? 1 : 1 - dungeon[row][col])
    }

    if(row >= rows || col >= cols) {
    return Infinity;
    }

    if(matrix[row][col] !== undefined) {
    return matrix[row][col];
    }

    let k = Math.min(
      dp(row + 1, col),
      dp(row, col + 1)
    )

    return matrix[row][col] = ((dungeon[row][col] - k >= 0) ? 1 : -(dungeon[row][col] - k));
  }
};

