// ** Day 18 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Course Level II ! }

// T A S K !!
// There are a total of n courses you have to take, labeled from 0 to n-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

// There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

// N O T E S ~
// Note:

//     The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
//     You may assume that there are no duplicate edges in the input prerequisites.


// * first attempt:
const findOrder = (numCourses, prerequisites) => {
  const adjList = new Map();
  const pending = new Set();
  const visited = new Set();
  const result = [];
    
    // create the adjacency list
    for(let [course, pre] of prerequisites) {
        adjList.set(pre, (adjList.get(pre) || new Set()).add(course));
    }
    
    for(let c = 0; c < numCourses; c++) {
        // if cyclic return empty array;
        if(callDFS(c)) return [];
    }
    
    function callDFS(node) {
        // if cyclic return 'true';
        if(pending.has(node)) return true;
        if(visited.has(node)) return;
        pending.add(node);
        
        // loop over the adjacent nodes
        for(let next of (adjList.get(node) || [])) {
            if(callDFS(next)) return true;
        }
        
        pending.delete(node);
        visited.add(node);
        result.push(node);
    }
    
    return result.reverse();
}

// * test cases!!
console.log(findOrder(2, [[1,0]])); // [0,1]
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]])); // [0,1,2,3] or [0,2,1,3]
