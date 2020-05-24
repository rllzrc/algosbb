// ** Day 23 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Interval List Intersection ! }

// T A S K ~ !!!

// Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// (Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  The intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].)

// * first attempt:
// to get intervals:
// max value: (starting point of A & B)
// min value: (ending point of A & B)
// only append interval if starting point is less than the ending point
// to check pointer values: if the ending point of A or A(i) > B(i) -> increase pointer B else increase A 
// whoever has a smaller ending point, increase the opposite 
const intervalIntersection = (A, B) => {
  // declare pointer variables & intervals to return out later
  let a = 0;
  let b = 0;
  const intervals = [];

  // loop while a pointer is less than A input length && b pointer is less than B input length
  while(a < A.length && b < B.length) {
    // declare max and min values of start and end intervals
    let intervalStart = Math.max(A[a][0], B[b][0]);
    let intervalEnd = Math.min(A[a][1], B[b][1]);

    // check if intervalStart pointer is less than or equal to intervalEnd pointer
    if(intervalStart <= intervalEnd) {
      // push the values into intervals array
      intervals.push([intervalStart, intervalEnd]);
    }

    // check ending points of a and b 
    if(A[a][1] < B[b][1]) {
      // increase a pointer
      a += 1;
    } else {
      b += 1;
    }
  }
  return intervals;
}

