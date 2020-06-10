// ** Day 7 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Search Insert Position }

// T A S K !!
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// * first attempt: use binary search
// search if target is in the given array
// if not found, search for position to insert
// have two pointer variables L = 0 R = last index -> mid = L + R / 2
// compare if value of mid is = to target, return index ya found it!
// if not equal to mid, search left or right -> modify mid - 1 for right -> mid + 1 if left side
// if target not found, LR collides
// L R M collides -> at this point, we stop, return pointer (left) to insert target
const searchInsert = (nums, target) => {
  // create pointer variables to perform binary search
  let left = 0;
  let right = nums.length-1;
  
  // iterate while left is less than or equal to right value
  while(left <= right) {
    // create a mid pointer 
    let mid = Math.floor((left + right) / 2);
    // check if mid is equal to target, if so return mid
    if(nums[mid] === target) {
      return mid;
    }
    // if target is less than nums at mid
    // reassign pointer variables to move on the left side of the arr
    if(target < nums[mid]) {
      right = mid - 1;
    } else {
      // if it is greater, move pointer to be on the right side of the arr
      left = mid + 1;
    }
  }
  // if target is not found in the array, L & R values will eventually collide
  // at this point, we stop and return left to insert the target
  return left;
}

// * test cases!!
console.log(searchInsert([1,3,5,6], 5)); // -> 2
console.log(searchInsert([1,3,5,6], 2)); // -> 1
console.log(searchInsert([1,3,5,6], 7)); // -> 4
console.log(searchInsert([1,3,5,6], 0)); // -> 0