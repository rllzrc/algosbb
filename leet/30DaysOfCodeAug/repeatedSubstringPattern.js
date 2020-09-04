// ** Day Infinity of Infinity Days of Code Challenge ~~
// ** --> { Repeated Substring Pattern !!! }

// T A SK !!!

// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

// * first attempt: 
const repeatedSubstringPattern = s => {
  // create pointer variables
  let mid = Math.floor(s.length / 2);
  let pattern;
  let patLength;
  // itereate through s up until mid point
  for(let i = 1; i <= mid; i += 1) {
    // build out pattern string with slice
    pattern = s.slice(0, i);
    // find patLength value
    patLength = Math.floor(s.length / pattern.length);
    // use repeat method and check if it matches input string
    if(pattern.repeat(patLength) === s) {
      return true;
    }
  }
  return false;
};


// * test cases!!
console.log(repeatedSubstringPattern("abab")); // -> true
console.log(repeatedSubstringPattern("aba")); // -> false
console.log(repeatedSubstringPattern("abcabcabcabc")); // -> true