// * Bagels Group LeetCode Challenge --> Binary Tree Level Order Traversal

// T A S K !!
// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

// * first attempt: iterative solution (not really binary search, but just for practice)
const search = (nums, target) => {
  // iterate through nums array
  // compare if current element is equal to target; if so return index
  // if not found, return -1

  for(let i = 0; i < nums.length; i += 1) {
    if(nums[i] === target) {
      return i;
    }
  }
  return -1;
}

// * second attempt: binary search for real
// compare target value to the middle of the element of the arr
// if target = to middle, return middle
// if target is < smaller, continue to search left
// if target is > greater, continue on the right

const binarySearch = (nums, target) => {
  // initialize left and right pointer variables
  let left = 0;
  let right = nums.length - 1;
  // loop while left is <= right 
  while(left <= right) {
    // create a pointer variable to adjust middle spot of arr
    let pivot = Math.floor((left + right) / 2);

    // create another variable to keep track of the guess value
    let guess = nums[pivot];

    // check if guess is equal to target, then we're good!
    if(guess === target) {
      return pivot;
    }

    // check if guess is way too high
    if(guess > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// * test cases !!!
console.log(search(nums = [-1,0,3,5,9,12], target = 9)); // -> 4
console.log(search(nums = [-1,0,3,5,9,12], target = 2)); // -> -1