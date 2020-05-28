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
const countBits1 = num => {
  // instantiate a result variable to return out later
  const result = [0];

  // iterate up until nums value
  for(let i = 1; i <= num; i += 1) {
    result.push(result[i>>1] + (i&1));
  }
  return result 
}

let countBits = (num, pow = 0, ans = [0]) => {
  for (let i = 1; i <= num; ++i)
      if (!(i & (i - 1)))
          ans.push(1), pow = i; // max pow2 so far
      else
          ans.push(1 + ans[i - pow]); // +1 for max pow2 + the prev ans w/o max pow2
  return ans;
};

// * second attempt: iteratively using DP
// dp formula = result[i] = 1 + result[i - pow]
// each power of 2 has a 1 bit set, lookup previous answers by subtracting each increasing num by the max power of 2 (pow)
// the current answer - result[i] is equal to 1 plus the previous without the max power of 2 - result[i - pow]
const countBits2 = (num, pow = 0, result = [0]) => {
  // iterate up until num input
  for(let i = 1; i <= num; i += 1) {
    if(!(i & (i - 1))) {
      result.push(1), pow = i; 
    } else {
      result.push(1 + result[i - pow]);
    }
  }
  return result;
}

// * test cases!!
console.log(countBits(2)); // -> [0,1,1] ex: [0000 (0), 0001(1), 0010(2), 0011(3), 0100(4), 0101(5)]
console.log(countBits(5)); // -> [0,1,1,2,1,2]


