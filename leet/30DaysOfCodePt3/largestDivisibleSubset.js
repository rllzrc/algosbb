// ** Day 9 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Largest Divisible Subset! }

// T A S K !!
// Given a set of distinct positive integers, find the largest subset such that every pair (Si, Sj) of elements in this subset satisfies:

// Si % Sj = 0 or Sj % Si = 0.

// If there are multiple solutions, return any subset is fine.

// * first attempt:
// sort input arr to reduce movement
// declare a result array, convert every element into a list
// for loop -> check every possible pair and see if it satisfies our conditon 
// if nums[i] % nums[k] === 0 and length of result is less than length of result k + 1 --> result[i] = result[k + nums[i]]
// return max of result key x length
const largestDivisibleSubset = nums => {
  // quick edge case check
  if(nums.length === 0) return [];

  // sort nums array
  nums.sort((a, b) => a - b);

  // create a result array and transfer every element into a list
  let output = [];  
  for(let i = 0; i < nums.length; i += 1) {
    output.push([nums[i]]);
  }

  // iterate through the nums arr
  for(let i = 0; i < nums.length; i += 1) {
    for(let k = 0; k < nums[i].length; k += 1) {
      // check condition for each set
      // if length of curr subset is less than previous subset + 1 
      if(nums[i] % nums[k] === 0 && result[i].length < result[k].length + 1) {
        // add pairs to output array that satisfy the conditon into the output subset; forming output array: previous subst + curr element
        output[i] = output[k] + [nums[i]];
      }
    }
  }
  // return the max of result & arr on the basis of length
  return Math.max(output);
}

// * test cases!!
console.log(largestDivisibleSubset([1,2,3])); // -> [1,2] (of course, [1,3] will also be ok)
console.log(largestDivisibleSubset([1,2,4,8])); // -> [1,2,4,8]