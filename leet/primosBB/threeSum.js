// * Put Your Reps In ~ BB Challenges!!!
// ** --> { 3Sum !!! }

// T A S K !!!
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// * first attempt: two pointer approach
// sort input array
// iterate through -> if curr value is greater than 0, break (remaining values cannot sum to 0)
// if curr value is the same as before, skip
// otherwise, call helper function on current i position

// helper function -> similar to two sum ii
// have to pointer variables: low to i + 1 and hi to last index
// while low is smaller than hi
// if the sum of nums [i][lo][hi] is less than zero, increment lo
// if sum is greater than zero, decrement hi
// else we found a triplet, add to result, decrement both hi and lo 

// time complexity: 
// * O(n^2) -> O(n) helper function called n times
// space complexity:
// * O(n)
const threeSum = nums => {
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

// * test cases!!
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // -> [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
