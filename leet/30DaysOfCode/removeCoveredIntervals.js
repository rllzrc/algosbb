// ** Days of Code Challenge Part X 
// ** --> { Remove Covered Intervals ! }

// T A S K !!
// Given a list of intervals, remove all intervals that are covered by another interval in the list.

// Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

// After doing so, return the number of remaining intervals.

// * first attempt: 
const removeCoveredIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    
  let count = 0;
  let curr = 0;
  let prev = 0;
  
  for (let prev = 0, curr = 1; curr < intervals.length; curr += 1) {
      const [prevStart, prevEnd] = intervals[prev];
      const [currStart, currEnd] = intervals[curr];
          
      if (prevStart <= currStart && prevEnd >= currEnd) {
          count++;
      } else {
          prev = curr;
      }
  }
  
  return intervals.length - count;
};

// * test cases!
console.log(combinationSum(candidates = [2,3,6,7], target = 7)); // [[2,2,3],[7]]
console.log(combinationSum(candidates = [2,3,5], target = 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum(candidates = [2], target = 1)); // []