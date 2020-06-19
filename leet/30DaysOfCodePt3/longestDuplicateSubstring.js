// ** Day 19 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Longest Duplicate Substring! }

// T A S K 
// Given a string S, consider all duplicated substrings: (contiguous) substrings of S that occur 2 or more times.  (The occurrences may overlap.)

// Return any duplicated substring that has the longest possible length.  (If S does not have a duplicated substring, the answer is "".)

// H I N T S ~
// Binary search for the length of the answer. (If there's an answer of length 10, then there are answers of length 9, 8, 7, ...)

// To check whether an answer of length K exists, we can use Rabin-Karp 's algorithm.

// * Rabin-Karp string pattern recognition 
// uses hashcode to add values to "the pattern" to match against given string
// rolling hash function to check current value and make sure the strings are matching
// subtract raise sq values, multiply and then add during rolling phase (with updated mechanism of using powers)
// drawback possibility of collision - "spurious hits" O(mn) worst case -> create a strong hash function to prevent this
// use 26 (number of letters in the alphabet) as a base to the power depending on the pattern's length
// subtract and add as you continue down the lenght of string
// O(n - m + 1) -> average case 
// avoid overflow by using % depending on data type (variable) 
// use the hash code to avoid checking every pattern in the string
// * first attempt: Rabin-Karp and Binary Search
const longestDuplicateSubstring = S => {
  // create a variable to hold on to the length of the string
  const length = S.length;

  // convert string to an arr of integers to implement constant slice time
  const nums = [];
  // charCodeAt will return a unicode of the character at the specified index in the string, index value = 0 & the code for a is 97 so subtract 
  // to support upper and lowercase use .charCodeAt(0) - 97 + 1
  for(let i = 0; i < length; i += 1) {
    nums[i] = S[i].charCodeAt(0) - 97;
  }
  
  //console.log(nums);

  // create a mod % variable to ensure rolling hash function phase does not go into overflow
  const mod = 2 ** 32;

  // create hash helper function to compute the hash pattern of string
  const pattern = len => {
    // compute hash pattern of string
    let hash = 0;
    for(let i = 0; i < len; i += 1) {
      hash = (hash * 26 + nums[i]) % mod;
    }

    // create a set or cache objet to store already seen hashes of strings
    const cache = new Set();
    cache.add(hash);
    let patternLength = 1;
    for(let i = 1; i <= len; i += 1) {
      // mod is added to prevent overflow from happening
      patternLength = (patternLength * 26) % mod;
    }

    for(let start = 1; start < length - len + 1; start += 1) {
      // perform rolling hash in O(1) time
      // subtract previous, add power sq base, multiply, add next iteration 
      hash = ((hash * 26 - nums[start - 1] * patternLength % mod + mod) % mod + nums[start - 1 + len]) % mod;

      // check if cache already has hash code
      if(cache.has(hash)) {
        return start;
      } else {
        cache.add(hash);
      }
    }
    return -1;
  };

  // perform binary search to check longerst duplicating substring from hash pattern 
  // create left, right pointer variables
  let left = 0;
  let right = length;

  // iterate through while left is smaller than right
  while(left < right) {
    // create a mid variable
    // ~~ repeating string length
    const mid = ~~((left + right) / 2);
    if(pattern(mid) !== -1) {
      // reassing left variable
      // check right side
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const start = pattern(left - 1);
  return S.slice(start, start + left - 1);

}

// * test cases!
console.log(longestDuplicateSubstring("banana")); // ->  "ana"
console.log(longestDuplicateSubstring("abcd")); // ->  ""