// ** Day 26 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Add Digits! }

// T A S K !!
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// * first attempt: brute force
// time complexity:
// * O(n)
// convert num to a string, split it, iterate through
// space complexity:
// * O(n) -> at most n calls on the call stack
const addDigits = num => {
  // check conditional
  if(num < 10) return num;
  // create variables to convert string and split it
  const numString = num.toString();
  const numArr = numString.split('');
  let sum = 0;

  // iterate through numstring
  for(const numStr of numArr) {
    sum += parseInt(numStr);
  }

  return addDigits(sum);
};

// * test cases!!
console.log(addDigits(38)); // -> 2