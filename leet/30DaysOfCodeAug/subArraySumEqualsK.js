// ** Days of Code Challenge Part X -- August Edition! 
// ** --> { Subarry Sum Equals K !!! }

// T A S K !!
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// * first attempt:
const subarraySum = (nums, k) => {
  // edge case check:
  if(k === 1) return 1;
  if(!nums || nums.length === 0 || k <= 0) return 0
  // create variables to keep track of:
  let output = 0;
  let left = 0;
  let temp = 0;
  // iterate through nums reassigning temp to be sum of elements
  for(let right = 0; right < nums.length; right += 1) {
    // reassign temp, perform addition
    temp += nums[right];
    // check while left is smaller than right and temp is <= k
    while(left < right && temp >= k) {
      temp -= nums[left++];
      // check if temp is === to k
      if(temp <= k) {
        output += right - left + 1;
      }
    }
  }
  return output;
}

// * test cases!!
console.log(subarraySum(nums = [1,1,1], k = 2)); // -> 2
console.log(subarraySum(nums = [1], k = 1)); // -> 1
console.log(subarraySum(nums = [1], k = 0)); // -> 0