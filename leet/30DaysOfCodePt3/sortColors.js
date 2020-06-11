// ** Day 11 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Sort Colors ! }

// T A S K !!
// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// * first attempt: in place & sans sort method
// two pointer approach
// left value and a right value
// current pointer will traverse entire nums array
// if curr = 0; swap to left pointer
// if curr = 2; swap to right
// while curr <= right
const sortColors1 = nums => {
  // create pointer variables to hold on to left, curr, and right values
  let left = 0;
  let current = 0;
  let right = nums.length-1;

  // check while current value is less than or equal to right
  while(current <= right) {
    // check if nums at current = 0
    if(nums[current] === 0) {
      // reassign curr and left values,. swap to value at left
      nums[left] = nums[current];
      nums[current] = nums[left];
      // increment left and curr pointers
      left += 1;
      current += 1;
    } else if(nums[current] === 2) {
      // swap values of current with right 
      nums[current] = nums[right];
      nums[right] = nums[current];
      // decrement right's value to get closer to 0 index
      right -= 1;
    } else {
      // meaning value isn't on the edges, not equal to 0 or 2
      // increment current
      current += 1;
    }
  }
  return nums;
}

// * second attempt: in place & sans sort method
const sortColors = nums => {
  // quick edge case check
  if(nums.length === 0 || nums.length === 1) {
    return;
  }

  // create pointer variables to keep track of values later during reassignment
  let left = 0;
  let current = 0;
  let right = nums.length-1;

  // iterate while current <= right and left < right
  // define boundaries accordingly
  // left will keep track of putting zeroes to the front
  while(current <= right && left < right) {
    // check if current element is = 0
    if(nums[current] === 0) {
      // reassign current to be left since we need the 0 value to be at the beginning
      nums[current] = nums[left];
      nums[left] = 0;
      // increment pointer variables
      left += 1;
      current += 1;
    } else if(nums[current] === 2) {
      // reassign current to be right since we need that value to be at the end of the arr
      // right will keep track of putting 2s to the back
      nums[current] = nums[right];
      nums[right] = 2;
      right -= 1;
    } else {
      // the values aren't edge or equal to 0 or 2
      current += 1;
    }
  }
  return nums;
}

// * test cases!!
console.log(sortColors([2,0,2,1,1,0])); // -> [0,0,1,1,2,2]