// ** Day 18 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Goat Latin !!! }

// T A SK !!!

// Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.

// For any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the "right" relationship for interval i. If the interval j doesn't exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.

// ---
// Note:

//     You may assume the interval's end point is always bigger than its start point.
//     You may assume none of these intervals have the same start point.


// * first attempt: 
const findRightInterval = (intervals) => {
  const n = intervals.length;
  const map = new Map();
  
  for (let i = 0; i < n; i++) {
      const [start, end] = intervals[i];
      map.set(start, i);
  }
  
  intervals.sort((a, b) => a[0] - b[0]);
  
  const res = [];
  
  for (let i = 0; i < n; i++) {
      const [start, end] = intervals[i];
      
      const minIndex = binarySearch(end, 0, n - 1);
      res[map.get(start)] = minIndex;
  }
  
  return res;
  
  
  function binarySearch(target, left, right) {
      while (left <= right) {
          const mid = left + Math.floor((right - left) / 2);
          const [start, end] = intervals[mid]; 
          
          if (start == target) {
              return map.get(start);
          }
          else if (start < target) {
              left = mid + 1;
          }
          else {
              right = mid - 1;
          }
      }
      
      return left == n ? -1 : map.get(intervals[left][0]);
  }
};

// * test cases!!
console.log(findRightInterval([ [1,2] ])); // -> [-1];
console.log(findRightInterval([ [3,4], [2,3], [1,2] ])); // -> [-1, 0, 1]
console.log(findRightInterval([ [1,4], [2,3], [3,4] ])); // ->  [-1, 2, -1]
