// ** AE: Graphs Daily Reps Challenge
// ** --> { river sizes !!! }

// T A S K !!

// You're given a two-dimensional array (a matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally or verticaly adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size.

// Not that a river can twist. In other words, it doesn't have to be a straight vertical line or a straight horizontal line; it can be L-shaped, for example.

// Write a function that returns an array of the size of all rivers represented in the input matrix. The sizes don't need to be in any particular order.

// * Input: 2 dimensional array (matrix)
// Output: a boolean value
// Constraints: optimize
// Edge Cases: make sure you are visiting N elements, if you're back on the starting element before visiting the N elements then that's a CYCLE >> if you end up visiting all N elements but you're not at the starting point = MULTIPLE CYCLES + negative numbers situation

// * Time: O(N) - linear
// * Space: O(1) - constant

// * first attempt:
const riverSizes = matrix => {
  const sizes = [];
  const visited = matrix.map(row => row.map(val => false));
  // traverse row
  for(let i = 0; i < matrix.length; i += 1) {
    // loop through columns
    for(let k = 0; k < matrix[i].length; k += 1) {
      // skip node if it is already visited 
      if(visited[i][k]) {
        continue;
      } else {
        // else, pass node as a parameter to helper function 
        traverseNode(i, k, matrix, visited, sizes);
      }
    }
  }
  return sizes;
};

// * helper function to check neighbors not yet visited
const getUnvisitedNeighbors = (i, j, matrix, visited) => {
  const unvisitedNeighbors = [];
  // check for proper indices
  // if element on the top hasn't been visited yet and indices are correct
  if(i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
  // check element on the bottom
  if(i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j]);
  // check leftmost element
  if(j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
  // check rightmost element
  if(j < matrix[i].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
  
  return unvisitedNeighbors;
};

// * helper function to traverse nodes
const traverseNode = (i, j, matrix, visited, sizes) => {
  let currentRiverSize = 0;
  // create an array that contains row + col indices of each node and it begins with only one node
  // treat this as a S T A C K, push values into it via DFS >> BFS would utilize a a Q U E U E instead of a stack
  const nodesToExplore = [[i, j ]];
  // iterate while we have nodes to explore, check out the current node 
  while(nodesToExplore.length > 0) {
    // create a variable to store current node's value
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    // skip if nodes are already visited
    if(visited[i][j]) continue;
    // once checked, set it equal to visited so we can keep track later
    visited[i][j] = true;
    // check neighboring values, if it is land, skip
    if(matrix[i][j] === 0) continue;
    currentRiverSize += 1;
    // run helper function that will return an array of indices/coordinates to check on next:
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    // add above's return value to the nodesToExplore array
    for(const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }
  // at this point, the while loop completes, calculate the size of the current river
  if(currentRiverSize > 0) sizes.push(currentRiverSize);
};