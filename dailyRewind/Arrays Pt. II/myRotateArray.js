// * Rotate Array

// TASK!
// Define a function, rotateArray, that accepts two arguments:
// originalArray (array)
// rotateNum (number)


const rotate = (arr, rotateNum) => {
  // declare a new variable for the front half of to the end of arr
  let front = arr.slice(-rotateNum); // grab start value from -1 index thru end of array
  let end = arr.slice(0, -rotateNum); // grab original array from beginning up until end of -1 index --> -1 is always rotateNum

  // concat / put em all together and return it out
  return front.concat(end);
}

// * test cases!!
// If the rotateNum is positive, rotate should return a copy of the original array rotated to the right by the rotateNum of indices.
console.log(rotate([1, 2, 3, 4, 5], 1)); // => [5, 1, 2, 3, 4]
// If the rotateNum is negative, rotate should return a copy of the original array rotated to the left by the rotateNum of indices.
console.log(rotate([1, 2, 3, 4, 5], -1)); // => [2, 3, 4, 5, 1]
// If the rotateNum is 0, rotate should return a copy of the original array without rotating it.
console.log(rotate([1, 2, 3, 4, 5], 0)); // => [1, 2, 3, 4, 5]
