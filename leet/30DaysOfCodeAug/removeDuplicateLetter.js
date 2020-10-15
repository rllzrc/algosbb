// ** Days of Code Challenge Part X  
// ** --> { Remove Duplicate Letters !!! }

// T A S K !!!

// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// * first attempt: 
const removeDuplicateLetters = s => {
  // edge case check
  if(!s || s.length === 0) return;
  // create a cache to store character frequency
  const cache = {};
  // add key/value pairs
  for(let i = 0; i < s.length; i += 1) {
    // create a variable to store current char
    let curr = s[i];
    // check if char exists, if so add +1 to value
    if(!cache[curr]) {
      cache[curr] = 1;
    } else {
      cache[curr] += 1;
    }
  }

  console.log(cache);
}

// * test cases:
console.log(removeDuplicateLetters(s = "bcabc")); // -> 'abc'
console.log(removeDuplicateLetters(s = "cbacdcbc")); // -> 'acdb'