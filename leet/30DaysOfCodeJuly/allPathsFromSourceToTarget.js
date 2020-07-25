// ** Day 24 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { All Paths From Source To Target }

// T A S K !!
// Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

// The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

// * first attempt:
const allPathsSourceTarget = graph => {
  const N = graph.length, result = [];
    
  function callDFS(node, arr) {
      if(node === N-1) {
          result.push([...arr, node])
          return;
      }
      
      for(let next of graph[node]) {
          callDFS(next, [...arr, node]);
      }
  }
  
  callDFS(0, []);
  return result;
}

// * test cases:
console.log(allPathsSourceTarget([[1,2], [3], [3], []])); // -> [[0,1,3],[0,2,3]] 