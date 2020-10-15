// ** Days of Code Challenge Part X -- August Edition! 
// ** --> { Palindrome Permutation !!! }

// T A S K !!
// Given a string, determine if a permutation of the string could form a palindrome.

// * first attempt: using charset/cache
const palindromePermutation = s => {
  // edge case check:
  if(!s || s.length === 0) return false;
  // create a cache variable to store char frequencies
  const cache = {};
  // map out key/val pairs ... if the letter already exists, delete it, if not add 1 to its value
  for(let char of s) {
    if(cache[char]) {
      delete cache[char];
    } else {
      cache[char] = 1
    }
  }
  return Object.keys(cache).length <= 1;
};

// * test cases~
console.log(palindromePermutation('code')); // -> false
console.log(palindromePermutation('aab')); // -> true
console.log(palindromePermutation('carerac')); // -> true

