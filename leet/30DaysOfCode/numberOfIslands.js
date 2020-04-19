// * Day 16 of 30 Days of Code!! --> Number of Islands !

// TASK!

// category: graph algo/theory

// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// *** Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

// * first pass using recursion & cb function!

const numIslands1 = grid => {
  let count = 0;

  // loop through matrix
  for (let i = 0; i < grid.length; i += 1){
    for (let j = 0; j < grid[i].length; j +=1){
	  // Start island traversal when encountering island
      if (grid[i][j] === "1") {
        visitIsland(i, j, grid);
		    // Once entire island has been visited, increment count
        count +=1;
      }
    }
  }
  return count;
}

const visitIsland = (i, j, grid) => {
  // create a variable to mark islands visited
  grid[i][j] = "0";

  // Check bordering positions, if island, recurse to it
  if (grid[i - 1] && grid[i - 1][j] === "1") visitIsland(i - 1, j, grid)
  if (grid[i + 1] && grid[i + 1][j] === "1") visitIsland(i + 1, j, grid)
  if (grid[i][j + 1] === "1") visitIsland(i, j + 1, grid);
  if (grid[i][j - 1] === "1") visitIsland(i, j - 1, grid);
};


// * second attempt:
// * using helper function and clearer recursive calls

// need to traverse entire matrix
const numIslands = grid => {
  // error/edge case check"=:
  // check if grid is empty or null, if so return 0
  if(grid === null || grid.length === 0) {
    return 0;
  }

  // helper function that will do the meat and potatoes of the logic
  const visitedIsla = (grid, i, k) => {
    // edge error check to make sure index values passed are valid
    // checking to see if we have gone out of bounds in the matrix
    // index is a 0; not interested we're done traversing here ok
    if(i < 0 || i >= grid.length || k < 0 || k >= grid[i].length || grid[i][k] === '0') {
      return 0;
    }

    // if the current cell is a '1'; sink the island!
    // reset to 0 so we don't revisit it again
    grid[i][k] = '0'
    // now visit all of its adjacent neighbors up down left right
    // this will check below it
    visitedIsla(grid, i + 1, k);
    // this will check above it
    visitedIsla(grid, i - 1, k);
    // this will check to the right of it
    visitedIsla(grid, i, k + 1);
    // this will check to the left of it
    visitedIsla(grid, i, k - 1);
    // then return 1 to account for the orginal one we saw while traversing through the matrix (in the for loop below)
    return 1;
  };

  let numeroIsla = 0;

  // traverse entire matrix 
  // outer loop to go through grid
  for(let i = 0; i < grid.length; i += 1) {
    // inner loop to go through each row 
    for(let k = 0; k < grid[i].length; k += 1) {
      // check if current cell is === 1
      if(grid[i][k] === '1') {
      // --> this is the interesting bit!
      // if you found a 1 --> visit all neighboring cells to see 
      // if they are also a 1 --> "syncing the island together"
      // invoke dfs (depthfirstseach) helper function!
        numeroIsla += visitedIsla(grid, i, k);
      }
    }
  }
    return numeroIsla;
}

// * test cases!!

console.log(numIslands([['1','1','1','1','0'], ['1','1','0','1','0'], ['1','1','0','0','0'], ['0','0','0','0','0']])); // --> 1
console.log(numIslands([['1','1','0','0','0'], ['1','1','0','0','0'], ['0','0','1','0','0'], ['0','0','0','1','1']])); // --> 1