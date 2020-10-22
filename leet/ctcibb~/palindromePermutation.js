// ** ctci  -- Daily Reps! 
// ** --> { Palindrome Permutation !!! }

// T A S K !!
// Given a string, determine if a permutation of the string could form a palindrome.

// * first attempt: using charset/cache
const palindromePermutation1 = s => {
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

// * second attempt: using Map()
const palindromePermutation = s => {
  // edge case check:
  if(!s || s.length === 0) return false; 
  // create a variable to store reversed characters in
  const map = new Map();
  for(let char of s) {
    if(map.has(char)) {
      map.delete(char);
    } else {
      map.set(char, 1);
    }
  }
  return (map.size === 0 || map.size === 1) ? true : false;
};

// * test cases~
console.log(palindromePermutation('code')); // -> false
console.log(palindromePermutation('aab')); // -> true
console.log(palindromePermutation('carerac')); // -> true

// * -------------
// * CTCI Version 

// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 

// input: string
// output: boolean
// constraints: optimize  
// edge cases: empty string, ignore spaces, more than two of the same character, even/odd chars
// if even: there must be two of every character
// if odd: there must be only one character
// use hash table to store letters
// if we see the same letter, delete
// check hash at the end: odd - 1 key left, even - no keys left
// skip spaces

// * time complexity: 
// * space complexity: 

const palPerm = s => { 
  // edge case check
  if(s === '') return true; 
  if(!s || s.length === 0) return false;

  // create a hash map to store char frequencies
  const map = {};
  // populate map w key/value pairs
  for(let char of s) {
    // skip spaces
    if(char === ' ') {
      continue; 
    }
    // ternary to check if letter already exists, add 1 to its value else set it to 1
    map[char] ? delete map[char] : map[char] = true;
  }
  return (Object.keys(map).length === 0 || Object.keys(map).length === 1);
}

// * test cases!!
console.log(palPerm('taco cat')); // -> true
console.log(palPerm('atco cat')); // -> true
console.log(palPerm('rac ecar rara')); // -> true
console.log(palPerm('aabbc')); // -> true
console.log(palPerm('geyser')); // -> false
console.log(palPerm('aabc')); // -> false
console.log(palPerm('')); // -> true