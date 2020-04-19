// * Day 16 of 30 Days of Code!! --> Number of Islands !

// TASK!

// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// *** Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

const testOne = [
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
​
const testTwo = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

// * first pass using recursion!

const numIslands = grid => {
  let count = 0;

  // loop through matrix
  for (let i = 0; i < grid.length; i += 1){
    for (let j = 0; j < grid[i].length; j +=1){
	  // Start island traversal when encountering island
      if (grid[i][j] === "1"){
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
}

console.log(numIslands(testOne)) // --> 1