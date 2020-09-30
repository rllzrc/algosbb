// ** Days of Code Challenge Part X -- August Edition! 
// ** --> { Merge Intervals !!! }

// T A S K !!!
// Given a collection of intervals, merge all overlapping intervals.

// * first attempt:
const merge = intervals => {
  // edge cases
  if(!intervals || intervals.length === 0) return [];
  // sort intervals out
  intervals.sort((a, b) => b[0] - a[0]);
  // create a result variable
  const output = [intervals.pop()];
  // iterate while intervals has elements to process
  while(intervals.length > 0) {
    // create start and end variables for comparison
    const [start1, end1] = output[output.length - 1]
    const [start2, end2] = intervals.pop();
    // check if end1 is less than or equal to start 2
    if(end1 >= start2) {
      const left = Math.min(start1, start2);
      const right = Math.max(end1, end2);
      output[output.length - 1][0] = left;
      output[output.length - 1][1] = right;
    } else {
      output.push([start2, end2]);
    }
  }
  return output;
}

// * test cases!!
console.log(merge(intervals = [[1,3],[2,6],[8,10],[15,18]])); // -> [[1,6],[8,10],[15,18]]
// Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
console.log(merge(intervals = [[1,4],[4,5]])); // -> [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.