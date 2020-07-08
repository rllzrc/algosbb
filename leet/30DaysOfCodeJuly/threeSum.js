// ** Day 8 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Three Sum ! }

// T A S K !!
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// * first attempt: two pointer approach
// time complexity: 
// * O(n^2) -> O(n) helper function called n times
// space complexity:
// * O(n)
const threeSum1 = nums => {
  // sort out nums array
  nums.sort((a, b) => a - b);
  // create an output result variable
  const output = [];
  // iterate through nums
  // remaning values cannot sum to 0
  for(let i = 0; i < nums.length && nums[i] <= 0; i += 1) {
    // if i = 0 and we have not seen it before
    if(i === 0 || nums[i - 1] !== nums[i]) {
      // run helper function
      twoSumII(nums, i, output);
    }
  }
  return output;
}

const twoSumII = (nums, i, output) => {
  // create two pointer variables low and hi
  let low = i + 1;
  let hi = nums.length-1;
  // iterate through while lo is less than hi
  while(low < hi) {
    // create a variable to keep track of sum
    let sum = nums[i] + nums[low] + nums[hi];
    // check if sum is less than 0, increment low
    // also check if the value is the same as lo - 1
    if(sum < 0 || (low > i + 1 && nums[low] === nums[low - 1])) {
      low++;
    } else if(sum > 0 || (hi < nums.length-1 && nums[hi] === nums[hi + 1])) {
      // if the sum is greater than zero, decrement hi value
      // also if it has the same val as hi + 1
      hi--;
    } else {
      // add it to output arr! we found a triplet!
      // decrement hi and increment lo
      output.push([nums[i], nums[low++], nums[hi--]]);
    }
  }
}

// * second attempt: variation of above code
const threeSum = nums => {
  // sort out nums arr
  nums.sort((a, b) => a - b);
  // create a variable to store answer arr in to return out later
  let output = [];

  // iterate through nums arr making, checking to see if current element is less than or equal to zero 
  for(let i = 0; i < nums.length && nums[i] <= 0; i += 1) {
    // check if i = 0 or the previous element does not equal the current
    if(i === 0 || nums[i - 1] !== nums[i]) {
      // run helper function passing in current element, nums arr, index, and output
      findThreeSum(nums[i], nums, i, output);
    }
  }
  return output;
}

// * helper function to perform meat and potatoes logic
const findThreeSum = (num, nums, index, output) => {
  // create two pointer variables
  let front = index + 1;
  let end = nums.length - 1;

  // iterate through while front is less than end value
  while(front < end) {
    // create a variable to store sum 
    const sum = num + nums[front] + nums[end];
    // conditional check to move pointer variables accordingly
    if(sum > 0 || (end < nums.length - 1 && nums[end] === nums[end + 1])) {
      // reassign end value
      end--;
    } else if(sum < 0 || (front > index + 1 && nums[front] === nums[front - 1])) {
      front++;
    } else {
      output.push([num, nums[front++], nums[end--]]);
    }
  }
  return;
}

// * test cases!!
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // -> [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
