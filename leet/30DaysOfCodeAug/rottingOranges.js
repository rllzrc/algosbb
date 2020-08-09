// ** Day 9 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Rotting Oranges ! }

// T A S K !!
// In a given grid, each cell can have one of three values:

//     the value 0 representing an empty cell;
//     the value 1 representing a fresh orange;
//     the value 2 representing a rotten orange.

// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

// * first attempt:
var orangesRotting = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const queue = [];
  
  let mins = 0;
  let fresh = 0;

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] == 1) fresh++;  // we count the # of fresh oranges to later see if there are any left
          else if (grid[i][j] == 2) queue.push([i, j]); // gather up the rotten oranges
      }
  }
  
  if (queue.length > 0) mins = bfs(queue); // if there are any rotten oranges, we start bfs to rot the neighboring oranges

  return fresh > 0 ? -1 : mins; // if fresh > 0, then we were unsuccessful in rotting all the fresh oranges
  
  function bfs(row, col) {
      const dirs = [-1, 0, 1, 0, -1];
      let mins = -1;
      
      while (queue.length > 0) {
          mins++;
          const len = queue.length;
          
          for (let i = 0; i < len; i++) {
              const [x, y] = queue.shift();
              
              for (let j = 0; j < dirs.length - 1; j++) {
                  const dirX = dirs[j];
                  const dirY = dirs[j + 1];
                  
                  const newX = x + dirX;
                  const newY = y + dirY;
                  
                  if (withinBound(newX, newY) && grid[newX][newY] == 1) {
                      grid[newX][newY] = 2; // rot the fresh orange
                      queue.push([newX, newY]);
          fresh--; // decrement our count of fresh oranges
                  }
              }
          }
      }
      
      return mins;
  }
  
   function withinBound(row, col) {
      return row >= 0 && col >= 0 && row < m && col < n;
  }
};

// * test cases:
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); // -> 4
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])); // -> -1
console.log(orangesRotting([[0,2]])); // -> 0