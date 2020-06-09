// * Put Your Reps In! --> Merge Intervals!

// Given a collection of intervals, merge all overlapping intervals.

// * first attempt:
// input: 2D Array
// each subarray is an interval
// beginning is first element and ending is second
// second element is the "merge point"
// check current interval and next interval and if the next interval's start point is less than current's end, then we found an overlap -> if equal still merge.
const merge = intervals => {
  // quick edge case check, if only one then there is no overlaps!
  if(intervals.length <= 1) {
    // only a single interval so no need to merge
    return intervals;
  }

  // sort out intervals in ascending order based on the first element in each interval 
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  //console.log(sorted)

  // create an output variable to return out later
  let output = [];

  // create a variable to keep track of curr interval
  let currentInt = intervals[0];
  // add currentInt to output arr for easy tracking later
  output.push(currentInt);
  //console.log('outputB4Loop:', output);

  // iterate through intervals 
  for(let i = 0; i < intervals.length; i += 1) {
    // create pointer variables to compare as we iterate through the intervals array
    let begin = currentInt[0];
    let end = currentInt[1];
    let nextStart = intervals[i][0];
    let nextEnd = intervals[i][1];
    // console.log('begin:', begin);
    // console.log('end:', end);
    // console.log('nextS:', nextStart);
    // console.log('nextE:', nextEnd);

    // check if current interval's end is greater than or equal to next intervals beginning, means we have an overlap!
    // update the ending value 
    if(end >= nextStart) {
      // update the end of the current interval already in the output array to become the math.max of whatever it was before to the overlapping ending interval aka the value of end --> since it is already in output it will reassign the value accordingly
      // no need to remove or add
      currentInt[1] = Math.max(end, nextEnd);
    } else {
      // if no merge, update current interval to be current element or interval we're at
      currentInt = intervals[i];
      // will add to output array and continues the cycle
      output.push(currentInt);
    }
  }
  console.log(output);

}

// * test cases!!
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // -> [[1,6],[8,10],[15,18]] >> Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
console.log(merge([[1,4],[4,5]])); // -> [[1,5]] >> Intervals [1,4] and [4,5] are considered overlapping.
console.log(merge([[4,1],[4,5]])); // -> [[1,5]] >> Intervals [1,4] and [4,5] are considered overlapping.

