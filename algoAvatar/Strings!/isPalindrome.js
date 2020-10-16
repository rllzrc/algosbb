// ** AE: Arrays Daily Reps Challenge  
// ** --> { isPalindrome !!! }

// T A SK !!!

// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome. A palindrome is defined as a string that's written the saeme forward and backward. Note that single-character strings are palindromes. 

// * first attempt: brute force
// time complexity: O(n^2)
// space complexity: O(n)

const isPalindrome1 = s => {
  // edge case check
  if(!s || s.length === 0) return false;
  // create a variable to store reversed string
  let revStr = '';
  // iterate through input str starting from the back to build out reversed string
  for(let i = s.length - 1; i >= 0; i -= 1) {
    revStr += s[i];
  }
  return s === revStr;
};

// * second attempt: use an array instead for time efficiency! 
// time complexity: O(n)
// space complexity: O(n)

const isPalindrome = s => {
  // edge case check
  if(!s || s.length === 0) return false;
  // create a variable to store reversed string
  let revChars = [];
  // iterate through s and build out revChars
  for(let i = s.length - 1; i >= 0; i -= 1) {
    revChars.push(s[i]);
  }
  return s === revChars.join(''); 
};

// * test cases!
console.log(isPalindrome('a')) // -> true
console.log(isPalindrome('abcdefghihgfeddcba')) // -> false
console.log(isPalindrome('abba')) // -> true
