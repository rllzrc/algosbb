// ** Day 25 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Find Minimum in Rotated Sorted Array II ! }

// T A S K !!
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

// Find the minimum element.

// The array may contain duplicates.

// Note:

//     This is a follow up problem to Find Minimum in Rotated Sorted Array.
//     Would allow duplicates affect the run-time complexity? How and why?
// //

// * first attempt:
const findMin = nums => {
  // fast track
  return Math.min(...nums);
}

// * test cases!!
console.log(findMin([1,3,5])); // -> 1
console.log(findMin([2,2,2,0,1])); // -> 0