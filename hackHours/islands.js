/*
​
Given a 2d grid map of 1s (land) and 0s (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands
horizontally or vertically. You may assume all four edges of the grid are all
surrounded by water.
​
EXAMPLE 1:
​
Input:
[
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
Output: 1
​
Input:
[
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]
Output: 3
​
Assume that the grid will be an array of arrays of numbers either 0 or 1, and
that the grid will have at least one element.
​
*/
​
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
​
const testGrid = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
​
const singleLineGrid = [[1], [1], [0], [0], [1], [0]];
​
const numIslandsIterative = (grid) => {
  // initialize row and column pointers
  let row = 0;
  let column = 0;
​
  // initialize island counter
  let islands = 0;
  let repeats = 0;
​
  // iterate over outer array (rows)
  while (row < grid.length) {
    // iterate over inner array (columns)
    while (column < grid[row].length) {
      // console.log('iterating across row', row, 'in column', column);
      // if current el is 1
      if (grid[row][column] === 1) {
        // if current el is the first el in the first row
        if (row + column === 0) {
          islands += 1;
        } else if (row === 0) { // if current el is non-first el in first row
          // if el to the left is 0, increment islands
          if (grid[row][column - 1] === 0) {
            islands += 1;
            grid[row][column] = islands;
          } else grid[row][column] = grid[row][column - 1];
        } else if (grid[row - 1][column] === 0 && !grid[row][column - 1]) { // if el to the left is 0 and el above is 0 or undefined (no previously touched el is > 0)
          // increment islands
          islands += 1;
          // set value of current el to the value of islands
          grid[row][column] = islands;
        } else { // else (current el is part of existing island) set current el's value to val of el above}
          // if both the els to the left of and above the current el > 0, but they aren't the same
          // then we've double counted an island, so increment repeats
          if (grid[row - 1][column] > 0 && grid[row][column - 1] > 0 && grid[row - 1][column] - grid[row][column - 1] !== 0) {
            repeats += 1;
          }
          // if current column is 0
          grid[row][column] = grid[row][column - 1] === undefined
            // assign current cell value of cell immediately above
            ? grid[row - 1][column]
            // otherwise assign it the greater of the values above and to the left
            // (to account for one of those values being 0)
            : Math.max(grid[row - 1][column], grid[row][column - 1]);
        }
      }
      // increment column
      column += 1;
    }
    // reassign column to zero
    column = 0;
    // increment row
    row += 1;
  }
  // return islands
  return islands - repeats;
};
​
// console.log(numIslandsIterative(testOne));
// console.log(numIslandsIterative(testTwo));
// console.log(numIslandsIterative(testGrid));
// console.log(numIslandsIterative(singleLineGrid));
​
​
/**
 *
 *
 *
 *
 * RECURSIVE APPROACH
 *
 *
 *
 *
 *
 */
​
function moveLeft(grid, row, column) {
  // while column points to a 1 in the current row
  while (grid[row][column]) {
    // set the element at column to 0
    grid[row][column] = 0;
​
    // invoke perpendicular helper functions
    moveUp(grid, row - 1, column);
    moveDown(grid, row + 1, column);
​
    // decrement column
    column -= 1;
  }
  return null;
}
​
function moveRight(grid, row, column) {
  // while column points to a 1 in the current row
  while (grid[row][column]) {
    // set the element at column to 0
    grid[row][column] = 0;
​
    // invoke perpendicular helper functions
    moveUp(grid, row - 1, column);
    moveDown(grid, row + 1, column);
​
    // increment column
    column += 1;
  }
  return null;
}
​
function moveUp(grid, row, column) {
  // while row points to a 1 in the current column
  while (grid[row] !== undefined && grid[row][column]) {
    // set element at row to 0
    grid[row][column] = 0;
​
    // invoke perpendicular helper functions
    moveLeft(grid, row, column - 1);
    moveRight(grid, row, column + 1);
​
    // decrement row
    row -= 1;
  }
  return null;
}
​
function moveDown(grid, row, column) {
  // while row is not undefined and current el is 1
  while (grid[row] !== undefined && grid[row][column]) {
    // set current el to 0
    grid[row][column] = 0;
​
    // invoke perpendicular helper functions
    moveLeft(grid, row, column - 1);
    moveRight(grid, row, column + 1);
​
    // increment row
    row += 1;
  }
  return null;
}
​
// moveDown(testOne, 0, 1);
// console.log(testOne);
​
const numIslandsIterative = (grid) => {
  // initialize counter
  let counter = 0;
​
  // initialize row and column indices at 0
  let row = 0;
  let column = 0;
​
  // iterate over outer array (rows)
  while (row < grid.length) {
    // iterate over inner array (columns)
    while (column < grid[row].length) {
      // if current el is 1
      if (grid[row][column] === 1) {
        // reassign current el to 0
        grid[row][column] = 0;
​
        // invoke left helper
        moveLeft(grid, row, column - 1);
​
        // invoke right helper
        moveRight(grid, row, column + 1);
​
        // invoke up helper
        moveUp(grid, row - 1, column);
​
        // invoke down helper
        moveDown(grid, row + 1, column);
​
        // increment counter
        counter += 1;
      }
      // increment column index
      column += 1;
    }
    // reassign column index to 0
    column = 0;
​
    // increment row index
    row += 1;
  }
​
  // return counter
  return counter;
};
​
// console.log(numIslands(testOne));
// console.log(numIslands(testTwo));