// * Day 4 Challenge of 30 Days of Code! --> MOVE ZEROES!

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// ex:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// * brute force approach 

const moveZeroes1 = arr => {

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

// * second try with forEach~ and in place !

const moveZeroes = arr => {

  arr.forEach((el, i) => {
    // create a temp var to store zero in
    let zero;
    if(el === 0) {
      // if current element is a zero, assign it to zero temp variable
      zero = el;
      console.log('i', i);
      console.log('e', el);
      arr.splice(i, 1);
      console.log('arr after splice:', arr);
      arr.push(zero)
    }
  })
  return arr;
}

// * test cases!

console.log(moveZeroes([0,1,0,3,12])); // --> Output: [1,3,12,0,0]
console.log(moveZeroes([0,0,1])); // --> Output: [1,0,0]


