// * Day 13 of 30 Days of Code! --->   Contiguous Array !

// TASK!

// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// * first pass 
const findMaxLength = nums => {
  // declare variable to store maxLength values
  let maxLength = 0;
  // declare varaible to store results in object
  let mapLength = {0: -1};
  // declare a variable to store count values
  let count = 0;

  // loop through arr 
  for(let i = 0; i < nums.length; i += 1) {
    // check if current element is === 0, if so count ++ if not count --
    (nums[i] === 0) ? count += 1 : count -= 1;

    // if count currently doesnt exist in our map object, add it
    if(mapLength[count] !== undefined) {
      // reassign maxLength to Math.max value of curr maxLength and index - current count at map
      maxLength = Math.max(maxLength, i - mapLength[count]);
    } else {
      // if current element is currently in map object, add it
      mapLength[count] = i;
    }
  }
  return maxLength;
}

// * test cases!
console.log(findMaxLength([0,1])); // --> 2
console.log(findMaxLength([0,1,0])); // --> 2

