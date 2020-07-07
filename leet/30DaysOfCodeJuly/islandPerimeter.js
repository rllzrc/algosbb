// ** Day 7 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Island Perimeter ! }

// T A S K!!
// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// * first attempt:
// loop through rows x cols
// create a perimeter variable to keep track
// if 1 found = add four to perimeter
// if there is a neighbor to the left or above (prev row and col) so subtract 2 from perimeter
const islandPerimeter = grid => {
  // perform boundary checks, quick edge cases
  if(grid === null || grid.length === 0 || grid[0].length === 0) return 0;

  // create a variable to store perimeter as we traverese the grid
  let perimeter = 0;
  // traverse the grid, outer loop is rows
  for(let i = 0; i < grid.length; i += 1) {
    // inner loop for cols
    for(let k = 0; k < grid[i].length; k += 1) {
      // if the current cell is a 1 or land
      // initially, assume the best case add to perimeter
      if(grid[i][k] === 1) {
        perimeter += 4;
      

        // perform condition checks for neighboring cells
        // i > 0 to ensure within boundary
        // grid[i - 1][k] is previous row
        if(i > 0 && grid[i - 1][k] === 1) {
          // subtract 2 from perimeter since they are sharing a boundary
          perimeter -= 2;
        }

        // perform conditional check 
        // j > 0 so within bounds
        // grid[i][k - 1] = previous col
        if(k > 0 && grid[i][k - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }
  return perimeter;
}

// * test cases!!
console.log(islandPerimeter([[0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]])); // -> 16