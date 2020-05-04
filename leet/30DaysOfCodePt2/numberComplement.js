// ** Day 4 of 30 Days of Code Challenge Part ii -- May Edition! Number Complement

// similar to challenge #1009 --> complement of base 10 integer ~

// TASK !!!

// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

// * Example:
// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// * first attempt

// check all of the bits (while loop)
// flip the bit
// use modulo to compare if number is even or odd

// have a loop go through nums and its binary representation 
const findComplement = num => {
  // initialize a result and power variable
  let result = 0;
  let power = 1;

  while(num > 0) {
    // to flip the bit correctly and multiply it by power, this will populate our result
    result += (num % 2 ^ 1) * power;
    // change power and shift accordingly
    // power shift by one or multiply by 2 
    power <<= 1;
    // need to change num to terminate loop and evaluate next bit; same as num / 2, truncates bit we just evaluated
    num >>= 1;
  }
  return result;
}


// * test cases!
console.log(findComplement(5)); // --> 2
console.log(findComplement(1)); // --> 0
