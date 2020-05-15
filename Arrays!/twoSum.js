// * Put Your Reps In !! --> TwoSum!

// T A S K !!!
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// * first attempt: brute force approach

// loop through each element and find if there is another value that equals target - x
// runtime complexity:
// * O(n^2) --> for each element we try to find its complement by looping through the rest of the array which takes O(n), so n squared
// space complexity:
// * O(1)

const twoSum = (nums, target) => {
  // outer loop is the initial loop through each element
  for(let i = 0; i < nums.length; i += 1) {
    // inner will check each element proceeding the first in order
    for(let k = i + 1; k < nums.length; k += 1) {
      // check the complement or difference value
      if(nums[k] === target - nums[i]) {
        return [i, k];
      }
    }
  }
}

// * test cases !!!
console.log(twoSum([2, 7, 11, 15], 9)); // -> [0, 1]