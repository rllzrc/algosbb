// ** Day 2=3 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Prison Cells After N Days ! }

// T A S K
// There are 8 prison cells in a row, and each cell is either occupied or vacant.

// Each day, whether the cell is occupied or vacant changes according to the following rules:

//     If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
//     Otherwise, it becomes vacant.

// (Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

// We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

// Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)

// * first attempt:
const prisonAfterNDays = (cells, N) => {
  // create a map of all possible cell combos
  const cellCombos = new Map();
  // create a variable to keep track of iterations
  // max 14
  const cellRotations = N % 14 === 0 ? 14 : N % 14;
  // iterate through and rotate cells once each day
  for( let i = 0; i < cellRotations; i += 1) {
    // create a variable to store current setup
    let curr;
    // check if we have already iterated over a cell setup
    if(cellCombos.has(cells)) {
      // reassign/return that value to current
      curr = cellCombos.get(cells);
    } else {
      // create a copy of the current day's setup using spread operator
      curr = [...cells];
      // iterate over each cell, ignoring the first and last
      for(let k = 1; k <= 6; k += 1) {
        // check if on the edge of map
        if(i === 0) {
          curr[0] = 0;
          curr[7] = 0;
        }

        // if left and right values/cells are at 0 or empty
        if(cells[k - 1] === 0 && cells[k + 1] === 0) {
          curr[k] = 1;
        } else if(cells[k - 1] === 1 && cells[k + 1] === 1) {
          // left and right adjacent cells have been occupied aka have the value 1
          curr[k] = 1;
        } else {
          // else, it is a vacant cell
          curr[k] = 0;
        }
      }
      // save the cells config matching current in map
      cellCombos.set(cells, curr);
    }
    // set curr to the last version 
    cells = curr;
  }
  return cells;
}

// * test cases!!
console.log(prisonAfterNDays(cells = [0,1,0,1,1,0,0,1], N = 7)); // -> [0,0,1,1,0,0,0,0]
console.log(prisonAfterNDays(cells = [1,0,0,1,0,0,1,0], N = 1000000000)); // -> [0,0,1,1,1,1,1,0]