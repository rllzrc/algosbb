// * Day 15 of 30 Days of Code !! --> Product of Array Except Self

// TASK!!

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// * first pass / brute force approach:
const productExceptSelf = nums => {
  // declare a variable to store product output arr in --> consider an object to store values in 

  // store length of num arr in a variable
  let length = nums.length;
  let result = [1];
  let temp = 1;

  // loop through the nums arr
  for(let i = 1; i < length; i += 1) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  for(let i = length-1; i > -1; i -= 1) {
    result[i] = result[i] * temp;
    temp = temp * nums[i]
  }

  return result;
}

// * test cases!!
console.log(productExceptSelf([1,2,3,4])); // --> [24,12,8,6];