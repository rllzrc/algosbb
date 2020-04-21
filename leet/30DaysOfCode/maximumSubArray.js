// * Day 3 of 30 Days of Code Challenge! --> Maximum SubArray!
// * aka Kadane's Algorithm

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6

// * first pass, brute force approach: 

const maxSubArray1 = arr => {

  // create a variable to store the current sum
  let currentSum = 0;

  // create another to keep track of the maxSum
  let maxSum = 0;

  // iterate through the array
  for(let i = 0; i < arr.length; i += 1) {
    // store the current element in a variable
    let currentNum = arr[i];

    // set currentSum accordinly as you go through the arr
    currentSum = Math.max((currentSum + currentNum), 0);

    // reset maxSum if it finds a larger value
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

// * alternative approach that passes all of leet's test cases:

const maxSubArray2 = arr => {
  let maxSum = 0;
  let subSum = 0;

  for(let i = 0; i < arr.length; i += 1) {
    subSum += arr[i];

    if(subSum > maxSum) maxSum = subSum;
    if(subSum < 0) subSum = 0;
  }

  return maxSum === 0 ? Math.max(...arr) : maxSum;
}

// * additional recursive solution w comments using Divide And Conquer Approach: 

const maxSubArray3 = arr => {

  // return results of the recursive func
  return findMaxSumInArr(arr);

  // this is the recursive function that will divide and conquer to find max sum from subarry of the arr passed in as a parameter
  function findMaxSumInArr(arr) {
    // BASE CASE~
    // if there is only one item in the arr, simply return that value
    if(arr.length === 1) {
      return arr[0];
    }

    // if no items in the arr, return -Infinity (needs to be a valid number for the calculations to take place later) 
    // in JS --> can only store numbers > -Infinity, this number will never be the max value
    if(arr.length === 0) {
      return -Infinity; 
    }

    // create and declare variables: zero-indexed length and midpoint
    let length = arr.length-1;
    let mid = Math.floor(length / 2);

    // * math stuff here! DIVISION: recursively find max sum in the left and right sub arrays
    let leftMaxSumSubArr = findMaxSumInArr(arr.slice(0, mid));
    let rightMaxSumSubArr = findMaxSumInArr(arr.slice(mid + 1, length + 1));

    // account for MERGING: division step above gives us max sum of left and right sides, but consider the possibility of having contiguous array that goes from left to right through midpoint 

    // create and declare variables to record the maximum contiguous sums for both sides 
    let leftMaxContigousSum = 0;
    let rightMaxContigousSum = 0;
  

    // * on left side, find sum of contigous array and keep updated record of max value
    // HEADS UP: in order to account for contigous arrays that traverse the midpoint, start search from the midpoint - 1 index and traverse left towards index 0. This direction guarantees that a contigous array traversing the midpoint will be able to add the midpoint itself and the right side's contigous arr --> see retun statement below 
    for(let i = mid - 1, currContiguousSum = 0; i >= 0; i -= 1) {
      currContiguousSum += arr[i];
      leftMaxContigousSum = Math.max(leftMaxContigousSum, currContiguousSum);
    }

    // * on right side, find sum of contigous array and keep an updated record of the max value
    // same as on the left side, to account for sub arrays that traverse the midpoint, start search from midpoint + 1 index and go towards the right to the end of the array
    for(let i = mid + 1, currContiguousSum = 0; i <= length; i += 1) {
      currContiguousSum += arr[i];
      rightMaxContigousSum = Math.max(rightMaxContigousSum, currContiguousSum);
    }

    // * RETURN out the max sum from the current array: either left, right, or contigous sub arr traversing from left to right to midpoint
    return Math.max(
      // this is the max sum from a contigous subarray that traverses the midpoint:
      leftMaxContigousSum + arr[mid] + rightMaxContigousSum,
      // max sum from each side whether a single value or a contigous sum)
      leftMaxSumSubArr,
      rightMaxSumSubArr
    );
  }
}

// Extra Notes:

// For the divide step, instead of slicing the array you could also keep the original array unaltered and simply update left and right bounds (this would necessitate changing code throughout the function, like the initial base cases would have to check for left === right and left > right respectively)

// * fourth attempt using Kadane's Algorithm
// runtime complexity:
// * O(n) --> only iterates through array just once
// start backwards --> from last element calculate the sum of every possible subarray ending with the element array[n-1]
// then calculate the sum of every possible subarray ending with array[n-2], array[n-3], as so on up until the first element array[0]
// the local max tracker the the max value of array[i] and the sum of array[i] and local max at index: [i-1]
// localMax[i] = max(array[i], array[i] + localMax[array[i-1])

const maxSubArray = arr => {

  let localMax = 0;
  let globalMax = -Infinity;

  for(let i = 0; i < arr.length; i += 1) {
    localMax = Math.max(arr[i], arr[i] + localMax);
    if(localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // ---> 6