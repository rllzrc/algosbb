// * Day 24 of 30 Days of Code !!! --> Jump Game

// TASK !!
// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// *** Example 1:
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// * first attempt
// runtime complexity
// * O(n)

// go backwards starting from the end of the array
// inititate a varaible called min and set it === 1 (since initially you only need to jump one over)
// at any point, if we can't jump over minSteps, increment it!

const canJump = nums => {
  // quick edge case check if nums length is less than or equal to 1, then it satisfies the condition
  if(nums.length <= 1) return true;
  // create a variable for minSteps
  let minSteps = 1;

  // iterate through the nums array starting from the back
  for(let i = nums.length - 2; i >= 1; i -= 1) {
    // check if nums[i] < min; if so increment it
    if(nums[i] < minSteps) {
      minSteps += 1;
    } else {
      minSteps = 1;
    }
  }

  if(nums[0] >= minSteps) {
    return true;
  }

  return false; 
}

// * Test Cases!!!

console.log(canJump([2,3,1,1,4])); // --> true
console.log(canJump([3,2,1,0,4])); // --> false
