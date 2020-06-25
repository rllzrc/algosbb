// ** Day 1 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Find the Duplicate Number ! }

// T A S K !!
// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// N O T E S ~

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

// * first attempt:
const findDuplicate = nums => {
  // create a variable to store hash map of nums and frequency value
  const map = new Map();

  // iterate through the nums arr and map out values
  for(let i = 0; i < nums.length; i += 1) {
    // create a variable to keep track of current element
    let curr = nums[i]
    // check if num is not in map yet, if so add it
    if(!map[curr]) {
      map[curr] = 1;
    } else {
      // if it already exists, add + 1 to its value
      map[curr] += 1;
    }
  }

  // check map and find the key/val pair that has more than 1 as its value
  for(let key in map) {
    //console.log(key);
    //console.log(map[key])
    // check if key's value is more than one, return that key out
    if(map[key] > 1) {
      return key;
    }
  }
}

// * test cases!!
console.log(findDuplicate([1,3,4,2,2])); // -> 2
console.log(findDuplicate([3,1,3,4,2])); // -> 3