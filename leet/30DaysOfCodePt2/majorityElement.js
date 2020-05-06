// ** Day 6 of 30 Days of Code Challenge Part ii -- May Edition! --> Majority Element

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// * first pass:
// runtime complexity:
// * O(n) linear, must touch every element once w for loop, reduce, and object.keys..

const majorityElement = nums => {
  // create a cache variable to store frequency of nums list
  const cache = {};
  // create a result variable to return out for later 

  // loop through the array of nums to populate our cache object
  for(let i = 0; i < nums.length; i += 1) {
    // hey cache, is this current element not added yet? if so, please add 
    if(!cache[nums[i]]) {
      cache[nums[i]] = 1;
    } else {
      // if it already exists, increment the value 
      cache[nums[i]] += 1;
    }
  }
  
  // loop through cache and check the largest value, return that one out
  const result = Object.keys(cache).reduce((acc, currVal) => cache[acc] > cache[currVal] ? acc : currVal);
  
  return result;
}

// * test cases!!
console.log(majorityElement([3,2,3])); // --> 3
console.log(majorityElement([2,2,1,1,1,2,2])); // --> 2