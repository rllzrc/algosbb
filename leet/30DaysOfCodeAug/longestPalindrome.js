// ** Day 14 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Longest Palindrome !!! }

// T A SK !!!

// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010. 

// * first attempt:
const longestPalindrome = str => {
  const set = new Set();
  let count = 0;
  
  for (const char of s) {
      if (set.has(char)) {
    count += 2;
          set.delete(char);
      } 
  else {
          set.add(char);
      }
  }

  return count + (set.size > 0 ? 1 : 0);
};

// * test cases!!
console.log(longestPalindrome('abccccdd')); // -> 7