// ** Day 12 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> {  Single Element in a Sorted Array ! }

// T A S K !!

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Note: Your solution should run in O(log n) time and O(1) space.

// * first attempt:
// runtime complexity:
// * O(n) --> linear, loop through each element once
const singleNonDuplicate1 = nums => {
  // create a cache variable
  const cache = {};

  // loop through nums in array and add it to cache object
  for(let i = 0; i < nums.length; i += 1) {
    // create a variable to store current element in 
    let current = nums[i];
    // check if current element exists in the cache object, if not add it 
    if(!cache[current]) {
      cache[current] = 1;
    } else {
      // if it is already in there, add one to its value
      cache[current] += 1;
    }
  }

  //console.log(cache);
  // once cache object is populate, loop through it again and find the property with one value, that is the element we will return out
  for(let i = 0; i < nums.length; i += 1) {
    if(cache[nums[i]] === 1) {
      return nums[i];
    }
  }

}

// thoughts on binary search method:
// use two pointer approach L and R
// find the middle value --> L + R / 2
// check for same value (mid + 1 or mid - 1) will be that subarray split
// use % to see if subarray halfs are even or odd (r-m) % 2 = 0
// if mid pair is on the right and halves are even: left = mid + 2
// if mid pair is on right and halves are odd: right = mid - 1
// if mid pair on left and halves are even: right = mid - 2
// if pair is on left and halves are odd: left = mid + 1

// * second attempt: using binary search
// runtime complexity:
// * O(log n)
// space complexity:
// * O(1)
const singleNonDuplicate = nums => {
  // create two pointer variables: left and right
  let left = 0;
  let right = nums.length-1;

  // loop through while left is less than right
  while(left < right) {
    // create a mid variable to split num arr in half
    let mid = (left + right) / 2;
    // check if halves are even; so once it is broken down into two subarrays:
    let splitEven = (right - mid) % 2 === 0;
    // upon split, if the matching pair of mid is on the right side and halves are even reassign left value
    if(nums[mid + 1] === nums[mid]) {
      if(splitEven) {
        // reassign left value
        left = mid + 2;
      } else {
        // if pair is on the right but its not even, reassign right value
        right = mid - 1;
      } 
    } else if(nums[mid - 1] === nums[mid]) {
      // after the split if the matching pair of mid is on the left and halves are even reassign right value
      if(splitEven) {
        right = mid - 2;
      } else {
        // if the pair is on the left but its not even, reassign left value
        left = mid + 1;
      }
    } else {
      // if it doesnt satisfy any of the above, simly return nums[mid] value
      return nums[mid];
    }
  }
  
  return nums[left];
}

// * test cases !!!
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])); // -> 2
console.log(singleNonDuplicate([3,3,7,7,10,11,11])); // -> 10