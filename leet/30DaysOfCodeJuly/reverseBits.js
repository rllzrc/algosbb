// ** Day 12 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Reverse Bits! }

// T A S K !!
// Reverse bits of a given 32 bits unsigned integer.

// * first attempt: iteratively
const reverseBits = n => {
  // create a sum variable
  let sum = 0;
  for(let i = 0; i < 32; i += 1) {
    // pickup digit at decimal
    let decimal = n % 2;
    sum = sum * 2 + decimal;
    n = (n - decimal) / 2;
  }
  return sum;
}

// * test cases!!
console.log(reverseBits(00000010100101000001111010011100)); // -> 00111001011110000010100101000000
console.log(reverseBits(11111111111111111111111111111101)); // -> 10111111111111111111111111111111