// ** Day 29 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Course Schedule ! }

// T A S K !!!
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// * first attempt:
const canFinish = (numCourses, prerequisites) => {
  
}

// * test cases:
console.log(canFinish(numCourses = 2, prerequisites = [[1,0]])); // -> true
console.log(canFinish(numCourses = 2, prerequisites = [[1,0],[0,1]])); // -> false