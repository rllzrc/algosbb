// ** Day 12 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> {  Single Element in a Sorted Array ! }

// T A S K !!

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Note: Your solution should run in O(log n) time and O(1) space.

// * first attempt:
// runtime complexity:
// * O(n) --> linear, loop through each element once
const singleNonDuplicate = nums => {
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

// * test cases !!!
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])); // -> 2
console.log(singleNonDuplicate([3,3,7,7,10,11,11])); // -> 10