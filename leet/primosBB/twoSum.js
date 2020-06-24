// * Put Your Reps In ~ BB Challenges!!!
// ** --> { TwoSum }

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// * first attempt: brute force
// time complexity:
// * O(n^2) -> for each element we try to find its complement by looping through the rest of the arr
// space complexity:
// * O(1) -> constant
const twoSum1 = (nums, target) => {
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

// * second attempt: two pass hash map solution
// time complexity:
// * O(n) -> linear, traverse list containing n elements twice, look up time reduced to O(1) via hash table
// space complexity:
// * O(n) -> extra space depends on num of items stored in hash table, storing exactly n elements
const twoSum2 = (nums, target) => {
  // create a new hash map variable to store complements and its index value
  const cache = {};

  // first loop we map out each element's value and index to the table
  for(let i = 0; i < nums.length; i += 1) {
    cache[nums[i]] = i;
  }

  //console.log(cache);

  // second loop check if the element's complement exists in the table
  for(let i = 0; i < nums.length; i += 1) {
    // create a variable to store complement
    let complement = target - nums[i];
    // check if complement exists in table
    if(cache[complement] && cache[complement] !== i) {
      return [i, cache[complement]];
    }
  }
}

// * third attempt: one-pass hash table!
const twoSum = (nums, target) => {
  // create a new hash table 
  const cache = new Map();

  // iterate through nums and map out values into hash table
  for(let i = 0; i < nums.length; i += 1) {
    // create a variable to store current complement
    let complement = target - nums[i];
    // check if Map contains the key of complement, if so, return the corresponding key/index
    if(cache.has(complement)) {
      //console.log('in the if~');
      return [cache.get(complement), i];
    } else {
      // if not, add it to the hash table!
      cache.set(nums[i], i);
    }
  } 
}

// * test cases!
console.log(twoSum([2, 7, 11, 15], target = 9)); // -> [0, 1]