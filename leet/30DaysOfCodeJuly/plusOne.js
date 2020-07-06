// ** Day 6 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Plus One! }

// T A S K !!
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// * first attempt:
const plusOne = digits => {
  // create a variable to store last digit
  // grab the last value of digits arr
  let lastNum = digits[digits.length-1];
  // add one to lastNum
  lastNum += 1;
  console.log(lastNum);
  // use splice to add lastNum as the last digit in the arr
  // first parameter = starting index, second = delete count, third = replace item with this 
  digits.splice(digits.length-1, 1, lastNum);
  // return out digits
  return digits;

}

// * test cases!!
console.log(plusOne([1,2,3])); // -> [1,2,4]
console.log(plusOne([4,3,2,1])); // -> [4,3,2,2]