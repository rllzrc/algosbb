// * Day 1 of 30 Days of Code Challenge Part II (May Edition)!!

// First Bad Version
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// *** Example:

// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version. 

// * First Pass using binary search ~

// brute force: iteratively 
// walk through the array and plug into the API call, worst case we have to go through all n versions so O(n)

// Do better: perfrom binary search instead!
// 0 = good 1 = bad [0,0,0,1]
// array is sorted so we can use this method instead

// * runtime complexity --> O(log N)
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    // create two pointer variables
    let left = 1; // --> aka the "bad version"
    let right = n;

    // loop through while left is less than right
    while(left < right) {
      // initiate a varibale to calculate middle point
      // (right - left) to help prevent overflow of v large values of arrays
      // since we need to make sure API calls are minimized --> divide that by 2 to get the mid point
      let mid = left + (right - left) / 2;

      // check if isBad version passing in the mid value
      if(!isBadVersion(mid)) {
        left = mid + 1; // --> continue traversing through the right side
      } else {
        right = mid; // reassign right variable to mid to go the opposite direction of the array
      }
    }
    return left;
  };
};

// * quick recap of above:
// log N bc left and right values point at the ends of the array (start and end)
// at every iteration, we're picking the midpoint, checking if that is the bad version, depending on whether or not we discard the left half of the array or vice versa
// eliminates half each time ~
