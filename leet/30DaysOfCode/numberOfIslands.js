// * Day 16 of 30 Days of Code!! --> Number of Islands !

// TASK!

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