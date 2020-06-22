// ** Day 21 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Single Number II }

// T A S K!!

// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// * first attempt: using extra memory
// time complexity: 
// * O(n) -> linear pass
const singleNumber = nums => {
  // create a cache / hash map object to store nums and frequencies
  const cache = {};

  // map out cache object and add each element as a key if not already there, if so add + 1 to its value
  for(let i = 0; i < nums.length; i += 1) {
    if(!cache[nums[i]]) {
      cache[nums[i]] = 1;
    } else {
      cache[nums[i]] += 1;
    }
  }

  //console.log(cache);

  // loop through cache object and check they key/value pairs --> if it === 1 return that key out

  for(let key in cache) {
    //console.log(key)
    //console.log(cache[key]);
    if(cache[key] === 1) {
      return key;
    }
  }

  // if not found
  return -1;
};

// * test cases!!
console.log(singleNumber([2,2,3,2])); // -> 3
console.log(singleNumber( [0,1,0,1,0,1,99])); // -> 99