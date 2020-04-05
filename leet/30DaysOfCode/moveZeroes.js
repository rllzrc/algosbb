// * Day 4 Challenge of 30 Days of Code! --> MOVE ZEROES!

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// ex:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeroes = arr => {

  let output = [];
  let zeroArr = [];
  // iterate through input arr
  for(let i = 0; i < arr.length; i += 1) {
    // check if current element is a zero
    if(arr[i] === 0) {
      zeroArr.push(arr[i]);
    } else {
      output.push(arr[i]);
    }
  }

  let result = output.concat(zeroArr);
  return result;
}

// * test cases!

console.log(moveZeroes([0,1,0,3,12])); // --> Output: [1,3,12,0,0]


