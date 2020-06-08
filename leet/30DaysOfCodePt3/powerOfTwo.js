// ** Day 1 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Power of Two ! }

// T A S K !!
// Given an integer, write a function to determine if it is a power of two.

// * first attempt: brute force solution 
// while n % 2 = 0
// n = n/2
// return true if n == 1
// time complexity:
// * O(log n) -> dividing input number in half
const isPowerOfTwo1 = n => {
  // quick edge case check: 
  if(n === 0) return false;
  // perform a while loop and check while n % 2 = 0
  while(n % 2 === 0) {
    n = n / 2
  }

  if(n === 1) {
    return true;
  }
  return false;
}

// * second attempt: 
// generate powers of two and determine if the number n is on that list
// OR continue to create powers of 2 while the power 2 we are currently on is less than number given at
// check is the number n = to the number we're at
const isPowerOfTwo = n => {
  // to prevent overflow; first power of 2 is 1
  let base = 1;
  // while base is lower than n
  while(base < n) {
    // multiple base * 2
    base *= 2;
  }

  // check if num is equal to n
  return base === n;
}

// * test cases!!
console.log(isPowerOfTwo(1)); // -> true
console.log(isPowerOfTwo(16)); // -> true
console.log(isPowerOfTwo(218)); // -> false