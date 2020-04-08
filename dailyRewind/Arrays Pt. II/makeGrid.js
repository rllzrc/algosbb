// * Make Grid

// Write a function makeGrid that accepts two arguments:
// numColumns (number)
// numRows (number)
// makeGrid should return a two-dimensional array that represents a grid of the given dimensions.


const makeGrid = (numColumns, numRows) => {

  // creat a variable to store grid result
  let grid = [];

  // OUTER loop through numRows, each iteration creates a new row to the grid
  for(let i = 0; i < numRows; i += 1) {

    // create a new row
    let row = [];

    // INNER loop through numColumns, each iteration creates a new column/cell to the row 
    for(let k = 0; k < numColumns; k += 1) {
      // push cells into rows
      row.push(k + 1);
    }
    // push the row into the grid
    grid.push(row);
  }
  return grid;
}

// * test cases!
console.log(makeGrid(3,4));
/* => [[1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]]
*/

