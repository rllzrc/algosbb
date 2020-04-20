// * Day 18 -->  Search in Rotated Sorted Array

// TASK !!!
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// *** Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// * first attempt:

const search = (nums, target) => {
  // create a result variable; set it to default -1 if target is not found to return later
  let result = -1;

  // keep track of the pivot
  let pivot = false;
  // keep track of the previous element
  let previous = null;

  // loop through nums array
  for(let i = 0; i < nums.length; i += 1) {
    // check if previous is greater than curr element and if pivot is stull undefined
    if(previous > nums[i] && !pivot) {
      // since arr is sorted, if previous is bigger then this is the start of the rotation
      pivot = true
    }

    if(nums[i] === target) {
      result = i;
      break;
    } else if(pivot && nums[i] > target) {
      // meaning the target is not found
      break;
    }

    // loop again so re-assign value of prev to current el
    previous = nums[i]
  }

  return result;
}

// * test cases !!
console.log(search([4,5,6,7,0,1,2], 3)); //--> -1
console.log(search([4,5,6,7,0,1,2], 0)); //--> 4