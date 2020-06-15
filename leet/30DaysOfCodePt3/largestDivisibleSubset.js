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
const largestDivisibleSubset1 = nums => {
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

// * second attempt: using DP
const largestDivisibleSubset2 = nums => {
  // quick edge case check:
  if(!nums.length) return [];

  // sort out nums arr
  nums.sort((a, b) => a - b);

  // create a dp array 
  const dp = Array.from({length: nums.length}, () => ({prev: null, length: 1}));
  let maxVal = 0; maxIdx = 0; output = [];

  // iterate through nums arr
  for(let i = 1; i < nums.length; i += 1) {
    // create a variable to hold on to previous index val
    let previous = 0;

    // loop through while previous is less than i
    while(previous < i) {
      // check condition
      if(nums[i] % nums[previous] === 0 && dp[previous].length + 1 > dp[i].length) {
        dp[i].length = dp[previous].length + 1;
        dp[i].prev = previous;
        if(dp[i].length > maxVal) {
          maxVal = dp[i].length;
          maxIdx = i;
        }
      }
      previous += 1;
    }
  }

  let current = maxIdx;

  while(current !== null) {
    output.push(nums[current]);
    current = dp[current].prev;
  }
  return output.sort((a, b) => a - b);
}

// * third attempt: using DP but cleaner
const largestDivisibleSubset = nums => {
  // quick edge case check:
  if(nums.length < 2) return nums;

  // sort out nums array
  //nums.sort((a, b) => a - b);

  // create variables to hold on to prior to reassignment later
  // create a dp matrix
  let length = nums.length;
  let dp = new Array(length).fill(0);
  let prev = new Array(length).fill(-1);
  let max = 0;
  let maxIndex = 0;

  // iterate through the nums arr
  for(let i = 1; i < length; i += 1) {
    // go backwards
    for(let k = i - 1; k >= 0; k -= 1) {
      // check conditional -> do the division~
      if(nums[i] % nums[k] === 0) {
        // check dp values 
        if(dp[i] < dp[k] + 1) {
          // perform reassignment
          dp[i] = dp[k] + 1;
          prev[i] = k;
        }
      }
    }

    // check max value agains current element at dp 
    if(max < dp[i]) {
      max = dp[i];
      maxIndex = i;
    }
  }

  // create an output array to return out later:
  let output = [];
  let j = maxIndex; 

  // check while j is not equal to -1
  while(j !== -1) {
    output.push(nums[j]);
    j = prev[j];
  }

  return output.sort((a, b) => a - b);
}

// * test cases!!
console.log(largestDivisibleSubset([1,2,3])); // -> [1,2] (of course, [1,3] will also be ok)
console.log(largestDivisibleSubset([1,2,4,8])); // -> [1,2,4,8]