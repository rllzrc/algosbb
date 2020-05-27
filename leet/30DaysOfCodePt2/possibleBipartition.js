// ** Day 27 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Possible Bipartition ! }

// T A S K !!!
// Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

// Each person may dislike some other people, and they should not go into the same group. 

// Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

// Return true if and only if it is possible to split everyone into two groups in this way.

// * first attempt:m use DFS
const possibleBipartition = (N, dislikes) => {
  // create a new matrix graph 
  const graph = new Array(N + 1);
  console.log(graph);
  // create a color cache
  const color = {};

}

// * test cases!!
console.log(possibleBipartition(N = 3, dislikes = [[1,2],[1,3],[2,3]])); // -> true, group1 [1,4], group2 [2,3]
console.log(possibleBipartition(N = 3, dislikes = [[1,2],[1,3],[2,3]])); // -> false
console.log(possibleBipartition(N = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]])); // -> false