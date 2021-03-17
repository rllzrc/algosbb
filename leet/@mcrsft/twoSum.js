// ** @mcrsft Arrays + Strings Reps Challenge  
// ** --> { two sum !!! }

// T A SK !!!

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// * --- Roadmap --- *
// input: array of nums and a target value
// output: indices of two numbers that add up to target value
// constraints: optimize
// edge cases: 

// * main squeeze:
// add thoughts here

const twoSum = (nums, target) => {
  const cache = {};
  
  for(let i = 0; i < nums.length; i += 1) {
    let currentNum =  nums[i];
    let difference = target - currentNum;
    // check if current element is already in cache, if so do some math
    if(cache.hasOwnProperty(difference)) {
      return [cache[difference], i ];
    } else {
      // set it in cache
      cache[currentNum] = i;
    }
  }
};