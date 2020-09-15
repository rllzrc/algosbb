// ** 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Maximum Product Subarray !!! }

// T A S K !!!

// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

// * first attempt: 
const maxProduct = (nums) => {
  // quick edge case check
  if(!nums || nums.length === 0) return;
  // create a max and temp var
  let max = nums[0];
  let min = nums[0];
  let result = max;
  // iterate through nums
  for(let i = 0; i < nums.length-1; i += 1) {
    // create a variable to store current element
    let curr = nums[i];
    // create a variable to store temporarily
    let tempMax = Math.max(curr, max * curr, min * curr);
    // reassign min variable 
    min = Math.floor(curr, max * curr, min * curr);
    // reassign max to tempMax
    max = tempMax;
  }
  
  result = Math.max(max, result);
  return result;
};

// * test cases!!!
console.log(maxProduct([2,3,-2,4])); // -> 6 [2,3] 
console.log(maxProduct([-2,0,-1])); // -> 0 
