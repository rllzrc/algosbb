// * Put Your Reps In !! --> Plus One

// TASK !!
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// * first attempt:
const plusOne1 = digits => {
  // brute force approach:

  // iterate through the end of the array
  // if we're at the last element, add 1 to it
  for(let i = 0; i < digits.length; i += 1) {
    console.log(digits[digits.length-1]);
    if(digits[i] === digits[digits.length-1]) {
      digits[digits.length-1] += 1;
    }
  }

  return digits;
}

// * second attempt using recursion
const plusOne = digits => {
  // create a variable to store last index value
  const lastIndex = digits.length-1;

  // base case
  if(digits.length === 0) {
    digits[0] = 1;
    return digits;
  } 

  // check if the last digit is a 9, change that value to 0 and run the function again with the same array minus the last digit while adding that 0
  if(digits[lastIndex] === 9) {
    digits[lastIndex] = 0;

    // so slicing from the beginning to last and adding in the zero as its last value, making a new array
    return plusOne(digits.slice(0, lastIndex).concat(digits[lastIndex]));
  } else {
    // if the last digit is not a 9, increment its value
    digits[lastIndex] += 1;
    return digits;
  }
};

// * test cases!!
console.log(plusOne([1,2,3])); // -> [1,2,4]
console.log(plusOne([4,3,2,1])); // -> [4,3,2,2]