// * Put Your Reps In ~ BB Challenges!!!
// ** --> { TwoSum }

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// * first attempt: brute force
const twoSum = (nums, target) => {
  // iterate through nums
  for(let i = 0; i < nums.length; i += 1) {
    for(let k = i + 1; k < nums.length; k += 1) {
      // check if next element (k) is equal to target - current element, if so we got a pair!
      if(nums[k] === target - nums[i]) {
        return [i, k];
      }
    }
  }
}

// * test cases!
console.log(twoSum([2, 7, 11, 15], target = 9)); // -> [0, 1]