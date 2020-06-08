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
const isPowerOfTwo = n => {
  // perform a while loop and check whil n % 2 = 0
  while(n % 2 === 0) {
    n = n / 2
  }

  if(n === 1) {
    return true;
  }
  return false;
}

// * test cases!!
console.log(isPowerOfTwo(1)); // -> true
console.log(isPowerOfTwo(16)); // -> true
console.log(isPowerOfTwo(218)); // -> false