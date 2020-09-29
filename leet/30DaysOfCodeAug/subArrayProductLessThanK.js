// ** Days of Code Challenge Part X -- August Edition! 
// ** --> { Subarry Product Less Than K !!! }

// T A S K !!
// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

// * first attempt:
const numSubarrayProductLessThanK = (nums, k) => {
  // edge case checks
  if(!nums || nums.length === 0 && !k || k > nums.length) return;

  // input: [10, 5, 2, 6] k = 100
  // output : 8
  // create a max variable to keep track of, set to -Infinity
  let max = -Infinity;
  // iterate through nums 
  for(let i = 0; i < nums.length - k + 1; i += 1) {
    // create a temp variable to keep track of
    let temp = 0; 
    // iterate up until k value
    // this will build / keep track of the length of the sliding window
    for(let j = 0; j < k; j += 1) {
      // reassign temp variable
      // find product of values in between the window
      temp *= nums[i + j];
    }
    // check if temp is greater than max
    // if so reassign values
    if(temp > max) {
      max = temp; 
    }

  }
  return max;
}


// * test cases!
console.log(numSubarrayProductLessThanK(nums = [10, 5, 2, 6], k = 100)); // 8 -> The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.