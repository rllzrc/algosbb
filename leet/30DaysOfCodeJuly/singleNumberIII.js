// ** Day 23 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Single Number III }

// T A S K !!
// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

// NOTE ~
Note:

    // The order of the result is not important. So in the above example, [5, 3] is also correct.
    // Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

// * first attempt:
const singleNumber = nums => {
  // quick edge case check:
  if(!nums || nums.length === 0) return [];
  // create a result variable
  const result = [];
  // create a cache to store nums frequency
  const cache = {};
  // map out key/val pairs
  for(let i = 0; i < nums.length; i += 1) {
    // create a variable to keep track of current element
    let curr = nums[i];
    // if it doesnt exist, add it
    if(!cache[curr]) {
      cache[curr] = 1;
    } else {
      cache[curr] += 1;
    }
  } 

  for(let key in cache) {
    if(cache[key] === 1) {
      result.push(key);
    }
  }

  return result;
}

// * test cases!!
console.log(singleNumber([1,2,1,3,2,5])); // -> [3,5]
