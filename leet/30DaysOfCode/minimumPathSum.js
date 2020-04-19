// * Day 17 of 30 Days of Code! --> Minimum Path Sum

// TASK !!!

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// *** Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

// * first pass using dynamic programming:

// * runtime:
// O(n * m) --> size of grid iterate through entire matrix and populate it into our mirrorGrid array
// * space complexity:
// same as above, O(n * m)

// * roadmap: 
// sum all nums to get from top left to bottom right corner
// dynamic programming problem --> "minimize" aka optimize --> always optimal solutons TYPICALLY --> in dynamic programming solve smaller problems to get to the main gig!

// * big problem:
// sum all nums to get from top left corner to bottom right corner
// * smaller problem:
// smaller search spaces --> mirror grid and store each index (i,j values or coordinates) --> store smallest sum to get to that square

const minPathSum = grid => {
  // simple error check here
  if(grid === null || grid.length === 0) {
    return 0;
  }
  // create a new variable to mirror grid
  // fill in this array with the smallest sum to get to that specific point in the matrix
  let mirrorGrid = grid;
  console.log('hello!!!!!!', mirrorGrid);

  // need to fill in the mirror array grid of all the smallest sum values so iterate through it --> will go through every cell in grid
  for(let i = 0; i < mirrorGrid.length; i += 1) {
    // second nested loop will go through each row
    for(let k = 0; k < mirrorGrid[i].length; k += 1) {
      // add all the values from original grid to mirrorGrid
      mirrorGrid[i][k] += grid[i][k];
      // coming from above or the left
      // this means that we've come from either above or to the left since you can only move dwon or right at any point in time
      // this will calculate the least amount of steps to get to the current spot
      if(i > 0 && k > 0) {
        mirrorGrid[i][k] += Math.min(mirrorGrid[i - 1][k], mirrorGrid[i][k - 1])
      } else if(i > 0) {
        // add to mirrorGrid[i][k] smallest way to get to that cell
        // simulating the path coming from above
        mirrorGrid[i][k] += mirrorGrid[i - 1][k];
      } else if(k > 0) {
        // pretty much similar to above
        // simulating the path coming from the left
        mirrorGrid[i][k] += mirrorGrid[i][k - 1];
      }
    }
  }

  // returning the bottom right hand corner in our mirrorGrid array/grid
  return mirrorGrid[mirrorGrid.length-1][mirrorGrid[0].length-1] / 2;

}



let grid1 = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]

// * test cases!
console.log(minPathSum(grid1)) // --> 7