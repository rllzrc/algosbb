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

const twoSum1 = (nums, target) => {
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

// * second attempt: use hash map / table approach!

// trade space for speed! 
// use two iterations, in the first we simply map out each element's value and index to the table, then second loop if to check if each element's complement (target - nums[i]) exists in table, be careful that the complement isn't the current element itslef! ~

// runtime complexity:
// * O(n) -> linear >> traverse the list twice but hash table reduces lookup time to O(1) -> constant
// space complexity:
// * O(n) -> extra space is required for the hash table and it depends on the number of items stored in the list, or n elements

const twoSum = (nums, target) => {
  // create a new cache or hash map container
  const cache = {};
  
  // loop through nums to map elements into cache object
  for(let i = 0; i < nums.length; i += 1) {
    cache[nums[i]] = i;
  }

  // loop through cache and check if complementary or difference value exists!
  for(let i = 0; i < nums.length; i += 1) {
    // create a complement or difference variable
    let complement = target - nums[i];
    // check if it can be found in cache, make sure its not the current element we're viewing
    if(cache[complement] && cache[complement] !== i) {
      return [i, cache[complement]];
    }
  }
}

// * test cases !!!
console.log(twoSum([2, 7, 11, 15], 9)); // -> [0, 1]
console.log(twoSum([4,6,1], 5)); // --> [0,2]
