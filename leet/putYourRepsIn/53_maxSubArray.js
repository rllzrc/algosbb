// ** Leetcode: Arrays Reps Challenge  
// ** --> { #53 Maximum Subarray }

// T A SK !!!

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// * first attempt ~
const maxSubArray = nums => {
  if(nums.length <= 1) return nums[0];

  let maxSum = -Infinity;
  for(let i = 0; i < nums.length; i += 1) {
    let currentMax = nums[i];
    if(currentMax > maxSum) {
      maxSum = currentMax;
    }
    for(let k = i + 1; k < nums.length; k += 1) {
      currentMax += nums[k];
      if(currentMax > maxSum) {
        maxSum = currentMax;
      }
    }
  }
  return maxSum;
}