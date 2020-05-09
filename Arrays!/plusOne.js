// * Put Your Reps In !! --> Plus One

// TASK !!
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// * first attempt:

const plusOne = digits => {
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

// * test cases!!
console.log(plusOne([1,2,3])); // -> [1,2,4]
console.log(plusOne([4,3,2,1])); // -> [4,3,2,2]