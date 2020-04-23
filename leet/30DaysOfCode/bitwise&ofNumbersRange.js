// * Day 23 of 30 Days of Code!! -->   Bitwise AND of Numbers Range

// TASK !!!

// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// *** Example:
// Input: [5,7]
// Output: 4

// Input: [0,1]
// Output: 0

const rangeBitwiseAnd = (m, n) => {
  let count = 0;

  while(m < n) {
    m = m >> 1;
    n = n >> 1;
    count += 1;
  }
  return m << count;
}

// * test cases!!!
console.log(rangeBitwiseAnd([5,7])); // --> 4
console.log(rangeBitwiseAnd([0,1])); // --> 0
