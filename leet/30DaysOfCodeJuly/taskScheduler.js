// ** Day 28 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Task Scheduler! }

// T A S K !!
// You are given a char array representing tasks CPU need to do. It contains capital letters A to Z where each letter represents a different task. Tasks could be done without the original order of the array. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// You need to return the least number of units of times that the CPU will take to finish all the given tasks.

// * first attempt: greedy approach
// given a bunch of tasks, some are recurring
// process all tasks in CPU, catch: between tasks cooling interval
// greedy approach -> run most freq occuring task first
// best chance of not running into an idle (little as possible)
// if can't run frequently task, run the next one

// create a hash map
// count times tasks occur
const leastInterval = (tasks, n) => {
  // create a hash map to store tasks frequency
  // map out key/val pairs 
  const map = new Map();
  // create a variable to track occurences of tasks and its count values
  let maxCount = 0;
  // tracks number of tasks that has the max occurences
  let maxTaskCount = 0;
  // map out key value pairs in map 
  for(let n of tasks) {
    // create a variable to keep track of current task
    // if map already has n tasks, add + 1 to value or set it to one if not
    let curr = map.has(n) ? map.get(n) + 1 : 1;
    map.set(n, curr);
    // set maxCount and number of maxTaskCount only if there is a new maximum value
    if(curr > maxCount) {
      maxCount = curr;
      maxTaskCount = 1;
    } else if(curr === maxCount)  {
      // else, increment number of maxCount tasks
      maxTaskCount += 1;
    }
  }
  // main formula 
  return Math.max(tasks.length, (maxCount - 1) * (n + 1) + maxTaskCount);
}

// * test cases!!
console.log(leastInterval(tasks = ["A","A","A","B","B","B"], n = 2)); // -> 8
console.log(leastInterval(tasks = ["A","A","A","B","B","B"], n = 0)); // -> 6
console.log(leastInterval(tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2)); // -> 16