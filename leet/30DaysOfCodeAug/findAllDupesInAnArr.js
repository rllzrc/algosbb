// ** Day 6 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Find All Duplicates In An Array! }

// T A S K !!
// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// * first attempt:
const findDuplicates = nums => {
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


// * test cases!! 
console.log(findDuplicates([4,3,2,7,8,2,3,1])); // -> [2,3]
