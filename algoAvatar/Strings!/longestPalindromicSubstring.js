// ** AE: Strings Daily Reps Challenge  
// ** --> { Longest Palindromic Substring !!! }

// T A SK !!!

// Write a function that, given a string, returns its longest palindromic substring.

// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

// You can assume that there will only be one longest palindromic substring. 

// input: string
// ouptut: string
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
const longestPalindromicSubstring = s => {
  // edge case check
  if(!s || s.length === 0 || s === ' ') return;
  

}

// * test cases
console.log(longestPalindromicSubstring('abaxyzzyxf')); // -> 'xyzzyx'
