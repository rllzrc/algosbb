// ** Day 9 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Is Subsequence ! }

// T A S K !!
// Given a string s and a string t, check if s is subsequence of t.

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

// Credits:
// Special thanks to @pbrother for adding this problem and creating all test cases.

// * first attempt:
// find all the characters in s and see if it is found in t
// have a pointer in s and check against t, iterate through it
// if so, increment pointer
// if pointer gets all the way to the end of t, return true
const isSubsequence = (s, t) => {
  // quick edge case check
  if(s === '') return true;

  // create a pointer variable to check s against t
  // starts at 0 since we are incrementing it if found in t
  let pointer = 0;

  // iterate through the t string
  for(let i = 0; i < t.length; i += 1) {
    // check if the current element or character is found in both strings
    if(t[i] === s.charAt(pointer)) {
      // increment pointer index by 1
      pointer += 1;
    }

    // if pointer index is greater than or less than s.length; no need to continue traversing throughout t's length
    if(pointer >= s.length-1) {
      return true;
    }
  }

  // if we reach the end and don't find all the chars in s in t
  return false;
}

// * test cases!!
console.log(isSubsequence(s = "abc", t = "ahbgdc")); // -> true
console.log(isSubsequence(s = "axc", t = "ahbgdc")); // -> false