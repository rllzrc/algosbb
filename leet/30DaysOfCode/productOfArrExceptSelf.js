// * Day 15 of 30 Days of Code !! --> Product of Array Except Self

// TASK!!

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// * first pass / brute force approach:
const productExceptSelf1 = nums => {
  // declare a variable to store product output arr in --> consider an object to store values in 
  let output = [];
  let temp = 1;

 // iterate through arr
  for(let i = 0; i < nums.length; i += 1) {
    output[i] = 1 * temp;
    temp *= nums[i];
    //console.log('output loop1:', output);
    //console.log('temp loop1:', temp);
  }

  temp = 1;

  for(let i = nums.length - 1; i >= 0; i -= 1) {
    //console.log('temp:', temp)
    //console.log('el output:', output[i]);
    output[i] *= temp;
    temp *= nums[i];
    //console.log('output loop2:', output);//console.log('el output:', output[i]);
    //console.log('temp loop2:', temp);
  }

  return output;
}

// * second pass using division (easy approach)

const productExceptSelf2 = nums => {
  let output = [];
  let product = 1;
  
  for(let i = 0; i < nums.length; i += 1) {
    product *= nums[i];
    //console.log(nums[i]);
    //console.log('prod:', product);
  }

  nums.forEach(el => {
    output.push(product / el);
  })

  return output;
}

// * third pass for practice: (stick it in the brain!)
// whatever is on the left x everything on the right; first element will only have one to the left of it
const productExceptSelf = nums => {
  let length = nums.length;
  // will contain all the products to the left of the element (current num)
  let left = [];
  // will contain every number to the right of it
  let right = [];
  // multiply both left and right values and push them into the output array
  let output = [];
  
  // since there is nothing to the left of the first element, put 1
  left[0] = 1;
  // same with the right side
  right[length-1] = 1;
  
  // loop through nums arr; starting at index 1 since there is something to the left of that
  for(let i = 1; i < length; i += 1) {
    // left is = to the number before (in nums original arr) * the left[i-1] the item before it, up until the point of the current element
    // left will keep track of multiplying the correct values to the left of current element 
    left[i] = nums[i-1] * left[i-1]
  }

  // we want to start on the right side now
  for(let i = length-2; i >= 0; i -= 1) {
    // same as above but flipped
    // to get the curr element to the right by the product up until the point on the right side 
    right[i] = nums[i + 1] * right[i + 1];
  }
  
  console.log(left, right);
  // one more loop to bring it all together!
  for(let i = 0; i < length; i += 1) {
    output.push(left[i] * right[i]);
  }

  return output;

}
// * test cases!!
console.log(productExceptSelf([1,2,3,4])); // --> [24,12,8,6];