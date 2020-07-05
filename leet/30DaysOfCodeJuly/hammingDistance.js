// ** Day 5 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Hamming Distance! }

// T A S K !!
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// evaluate binary of the two numbers
// determine where the binary representations are different
// count the differences
// XOR bitwise operation
// * first attempt:
const hammingDistance = (x, y) => {
  // initiate a count variable
  let count = 0;
  // iterate while x and y are greater than 0
  while(x > 0 || y > 0 ) {
    // reassign result, access last bit of x and y
    // check if even or odd, if odd = last digit in binary 1
    // even = binary 0
    // same returns 0, different returns 1
    count += (x % 2) ^ (y % 2);
    // shift x over by 1, aka divide x by 2 shift last bit in x and y
    // every iteration will check a different bit
    x >>= 1;
    y >>= 1;
  }
  return count;
};

// * test cases!
console.log(hammingDistance(x = 1, y = 4)); // -> 2