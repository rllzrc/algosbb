// * Put Your Reps In! --> Merge Intervals!

// Given a collection of intervals, merge all overlapping intervals.

// * first attempt:
// input: 2D Array
// second element is the "merge point"
// check current interval and next interval and if the next interval's start point is less than current's end, then we found an overlap -> if equal still merge.
const merge = intervals => {
  // quick edge case check, if only one then there is no overlaps!
  if(intervals.length <= 1) {
    return intervals;
  }

  // sort out intervals in ascending order
  const sorted = intervals.sort((a, b) => a - b);
  console.log(sorted)
}

// * test cases!!
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // -> [[1,6],[8,10],[15,18]] >> Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
console.log(merge([[1,4],[4,5]])); // -> [[1,5]] >> Intervals [1,4] and [4,5] are considered overlapping.
console.log(merge([[4,1],[4,5]])); // -> [[1,5]] >> Intervals [1,4] and [4,5] are considered overlapping.

