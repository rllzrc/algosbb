// ** Day 4 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Power of Four ! }

// T A S K !!
// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// * first attempt:
// take log of given num on base 4, if positive integer then true
// or keep dividing the num by 4, if result is non zero and not 1 then false
const isPowerOfFour1 = num => {
  // quick edge case check
  if(num === 0) return 0;
  // iterate while n is not 1
  while(num !== 1) {
    // perform division
    if(num % 4 !== 0) {
      return false;
    }
    // keep dividing by 4
    num = num / 4;
  }
  return true;
}

// * second attempt: using log
const isPowerOfFour = num => {
  // quick edge case check
  if(num === 0) return false;
  const log = Math.round(Math.log(num) / Math.log(4));
  return 4 ** log === num;
}

// * test cases!!
console.log(isPowerOfFour(16)); // -> true
console.log(isPowerOfFour(5)); // --> false