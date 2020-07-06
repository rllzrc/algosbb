// ** Day 6 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Plus One! }

// T A S K !!
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// * first attempt:
const plusOne1 = digits => {
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

// * second attempt: to account for edge cases:
const plusOne2 = digits => {
  // create a variable to store last index value
  const lastIndex = digits.length - 1;

  // quick edge case check
  if(digits.length === 0) {
    // in case array is empty
    digits[0] = 1;
    return digits;
  } else if(digits[lastIndex] === 9) {
    // if the last num is a 9, can't just add +1 since it will be a 10
    digits[lastIndex] = 0;
    // use slice and concat to add 0 to the end of the arr
    return plusOne(digits.slice(0, lastIndex)).concat(digits[lastIndex]);
  } else {
    // if last digit is not a 9, simply increment its value
    digits[lastIndex] += 1;
  }
  return digits;
}

// * third attempt iteratively
const plusOne = digits => {
  for(let i = digits.length - 1; i >= 0; i -= 1) {
    if(digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
}

// * test cases!!
console.log(plusOne([1,2,3])); // -> [1,2,4]
console.log(plusOne([4,3,2,1])); // -> [4,3,2,2]