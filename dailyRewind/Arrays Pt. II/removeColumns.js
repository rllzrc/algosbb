// * Remove Columns!

// Write a function removeColumns that accepts two arguments
// originalGrid (two-dimensional array)
// numColums (number)
// removeColumns should return a new grid with the correct number of columns removed.

const removeColumns = (grid, numColumns) => {

  // loop through the entire original grid
  for(let i = 0; i < grid.length; i += 1) {
     // loop through numColumns to delete number of columns
    for(let k = 0; k < numColumns; k += 1) {
      // remove or pop it off
      grid[i].pop()
    }
  }
  return grid;
}

// * test cases!
console.log(removeColumns([[1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]], 2));
/* => [[1],
[1],
[1],
[1]]
*/