// ** Day 29 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Course Schedule ! }

// T A S K !!!
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// * first attempt: use BFS
const canFinish = (numCourses, prerequisites) => {
  // create a cache object to store the prereqs for each course
  const cacheReqs = {};
  // create a new set to store all the courses that are completed
  const completed = new Set();


  // iterate through the prereqs for each class and add it to its respective list; map out each item into the cacheReqs object
  for(let [a, b] of prerequisites) {
    if(!cacheReqs[a]) {
      cacheReqs[a] = [b];
    } else {
      cacheReqs[a].push(b);
    }
  }

  // for ease later, mark all courses that have no prereqs as already taken --> add them into the completed set
  for(let i = 0; i < numCourses; i += 1) {
    if(!cacheReqs[i]) {
      completed.add(i);
    }
  }

  // for each course with a prereq check if a cycle exists
  for(let course in prereq) {
    if(checkCycle(course)) {
      return false;
    }
  }

  // if no cycles are found, we can complete the curriculum yaay!
  return true;
}

// create a helper function starts with a course and will recursively call it again on each of that courses' respective prereqs
// each time we visit a new course we mark it into the completed set
// if at some point in the recursive call we find a course that is already marked as completed, we found a cycle! therefore we are unable to finish the curriculum

// once all prereqs are successfully taken for a given course we also mark it as completed
// if all courses are marked as completed, then we are able to finish the curriculum!
const checkCycle = course => {
  // create a new set variable to store all the courses that are currently being taken
  const inProgress = new Set();
  // check if the we've already completed the course, thus we don't need to worry about this one: return false!
  if(completed.has(course)) return false;
  // check if the current course is part of the inProgress list, thus there is a cycle!
  if(inProgress.has(course)) return true;
  // add the current course to the inProgress track
  inProgress.add(course);
  // for each prereq in the current course, recusively call the checkCycle function once again 
  for(let i of cacheReq[course]) {
    // if found, then return true
    if(cacheReq(i)) return true;
    // add it to the completed set
    completed.add(course);
    // return false if no cycles are found
    return false;
  }
}

// * test cases:
console.log(canFinish(numCourses = 2, prerequisites = [[1,0]])); // -> true
console.log(canFinish(numCourses = 2, prerequisites = [[1,0],[0,1]])); // -> false