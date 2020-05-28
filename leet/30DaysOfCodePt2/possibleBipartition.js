// ** Day 27 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Possible Bipartition ! }

// T A S K !!!
// Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

// Each person may dislike some other people, and they should not go into the same group. 

// Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

// Return true if and only if it is possible to split everyone into two groups in this way.

// * first attempt: use DFS
const possibleBipartition = (N, dislikes) => {
  // quick edge case check:
  if(dislikes.length === 0) return true;

  // create a new matrix graph 
  const graph = new Map();

  // create a new matrix to store marked values
  const found = Array(N + 1).fill(0);

  // create stack DS
  const stack = [];

  // build out a list of all adjacent points
  for(let [a, b] of dislikes) {
    graph.set(a, (graph.get(a) || new Set()).add(b));
    graph.set(b, (graph.get(b) || new Set()).add(a));
  }

  // reassign found values at first element
  found[0] = 1;
  stack.push([dislikes[0][0], 1]);

  // iterate through while stack has values
  while(stack.length) {
    // create a marker variable
    const [n, m] = stack.pop();
    found[n] = m;

    if(graph.has(n)) {
      // create a neigbhor value
      const neighbors = graph.get(n);

      // iterate through vertex values
      for(let vertex of neighbors) {
        if(found[vertex] === m) return false;
        if(found[vertex] === 0) stack.push([vertex, ~m]);
      }
    }

    if(stack.length === 0 && found.includes(0)) {
      for(let i = 1; i < found.length; i += 1) {
        if(graph.has(i) && marked[i] === 0) {
          stack.push([i, 1]);
          break;
        }
      }
    }
  }
  return true;
}

// * second attempt: iterative solution:
const possibleBipartition = (N, dislikes) => {
  const graph = new Array(N+1);
  const color = {};
  
  const dfs = (node, c) => {
      if (color[node]) {
          return color[node] === c
      }
      color[node] = c;
      
      for(let i=0; i<graph[node].length; i++){
          if (!dfs(graph[node][i], c ^ 1)) {
              return false;
          }
      }
      return true
  }
  
  for(let i=1; i<=N; i++){
      graph[i] = [];
  }
  
  for(let i=0; i<dislikes.length; i++){
      const edge = dislikes[i];
      graph[edge[0]].push(edge[1]);
      graph[edge[1]].push(edge[0]);
  }
  
  for(let i=1; i<=N; i++){
      if (color[i] == null && !dfs(i, 0)) {
          return false
      }
  }
  return true;
};

// * test cases!!
console.log(possibleBipartition(N = 3, dislikes = [[1,2],[1,3],[2,3]])); // -> true, group1 [1,4], group2 [2,3]
console.log(possibleBipartition(N = 3, dislikes = [[1,2],[1,3],[2,3]])); // -> false
console.log(possibleBipartition(N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]])); // -> false