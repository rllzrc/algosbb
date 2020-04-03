// * Day 3 of 30 Days of Code Challenge! --> Maximum SubArray!
// * aka Kadane's Algorithm

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6

const maxSubArray = arr => {

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

// alternative approach that passes all of leet's test cases:

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // ---> 6