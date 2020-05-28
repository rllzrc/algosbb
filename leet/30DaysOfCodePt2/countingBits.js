// ** Day 24 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Counting Bits ! }

// T A S K !!
// Counting Bits
// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// least significant bit - right-most predefined if num is odd or even 
// right shift by 1: equivalent to dividing the num by 2
// if even, add 0 >> if odd, add 1 (for right shifts)
// ex: 0110 (6) -> 0011 (moved the zero in front = 3)

// odd --> take num / 2 + 1 to get binary representation of 1s
// even --> take num / 2 '' then take that num's binary reprsentation 
// * first attempt:
// time complexity: 
// * O(n) -> constant one pass
// space complexity:
// * O(n)
const countBits = num => {
  // instantiate a result variable to return out later
  const result = [0];

  // iterate up until nums value
  for(let i = 1; i <= num; i += 1) {
    result.push(result[i>>1] + (i&1));
  }
  return result 
}

// * test cases!!
console.log(countBits(2)); // -> [0,1,1] ex: [0000 (0), 0001(1), 0010(2), 0011(3), 0100(4), 0101(5)]
console.log(countBits(5)); // -> [0,1,1,2,1,2]


