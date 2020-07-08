// ** Day 8 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Three Sum ! }

// T A S K !!
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// * first attempt: two pointer approach
// time complexity: 
// * O(n^2) -> O(n) helper function called n times
// space complexity:
// * O(n)
const threeSum = nums => {
  // sort out nums array
  nums.sort((a, b) => a - b);
  // create an output result variable
  const output = [];
  // iterate through nums
  // remaning values cannot sum to 0
  for(let i = 0; i < nums.length && nums[i] <= 0; i += 1) {
    // if i = 0 and we have not seen it before
    if(i === 0 || nums[i - 1] !== nums[i]) {
      // run helper function
      twoSumII(nums, i, output);
    }
  }
  return output;
}

// * test cases!!
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // -> [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
