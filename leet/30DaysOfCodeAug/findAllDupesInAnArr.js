// ** Day 6 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Find All Duplicates In An Array! }

// T A S K !!
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// * first attempt: using frequency cache
const findDuplicates1 = nums => {
  // quick edge case check
  if(!nums || nums.length === 0) return [];
  // create a variable to store frequencies
  const cache = {};
  const output = [];
  // iterate nums, map out key/val pairs in cache
  for(let e of nums) {
    cache[e] = (cache[e] || 0) + 1;
  };
  // iterate through cache and check if value is greater than one, return keys out into arr
  console.log(cache);
  for(let key in cache) {
    
    if(cache[key] >= 2) {
      output.push(key);
    }
  }
  return output; 
};

// * second attempt: using Set
const findDuplicates2 = nums => {
  const set = new Set();
  const output = [];
  for(let e of nums) {
    if(set.has(e)) {
      // set does not have any dupes, so if it already finds it then we just push those keys into the output array
      output.push(e);
    } else {
      set.add(e);
    }
  }
  console.log(set)
  return output; 
}

const countUniqueValues = arr => {
  // quick edge case check 
  if(arr.length === 0 || !arr) return 0;
  // create pointer variable to keep track of
  let k = 0;
  // iterate through arr
  for(let i = 1; i < arr.length; i += 1) {
    // check conditional if elements do not match
    if(arr[k] !== arr[i]) {
      // increment k value
      k += 1;
      // reassign k value to be i
      // to continue to build out all uniques at the front of the array
      arr[k] = arr[i];
    }
  }
  // to count for 0 start
  return k + 1;
};

// * third attempt: multiple pointers approach
const findDuplicates = nums => {
  // quick edge case check
  if(!nums || nums.length === 0) return [];
  // sort out array
  nums = nums.sort((a, b) => a - b);
  // create a pointer variable to keep track of
  let k = 0;
  // iterate through nums
  for(let i = 1; i < nums.length; i += 1) {
    // check conditional if elements do not match
    if(nums[k] !== nums[i]) {
      
    }
  }
}
// * test cases!! 
console.log(findDuplicates([4,3,2,7,8,2,3,1])); // -> [2,3]
