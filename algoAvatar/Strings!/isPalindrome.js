// ** AE: Strings Daily Reps Challenge  
// ** --> { isPalindrome !!! }

// T A SK !!!

// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome. A palindrome is defined as a string that's written the saeme forward and backward. Note that single-character strings are palindromes. 

// * roadmap
// create a new string, iterate backwards
// check if new string === s to find out if a palindrome 

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
    // string concatenation creates a new string since it is immutable thus O(N^2)
    revStr += s[i];
  }
  return s === revStr;
};

// * second attempt: use an array instead for time efficiency! 
// time complexity: O(n)
// space complexity: O(n)

// * roadmap: 
// new string = []
// iterate backwards, push character into []
// check if new === s.join() -> convert back to string to compare it

const isPalindrome2 = s => {
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

// * third attempt: explore recursion

// roadmap: 
// is the first letter equal to the last letter? is the string in the middle a palindrome as well? 
// by applying this logic, we can use recursion => isPalindrome function - base case is middle of string returning true or false
// if the first letter = last letter && isPalindrome (call it on the middle character) => then return true

// * time complexity: O(N) -> half iteration through the string but still converges to linear time 
// * space complexity: due to recursion -> call stack stores state of function there (adds frame onto it) thus O(N/2) which converges to O(N)

const isPalindrome3 = (s, i = 0) => {
  // initialize index to 0 -> default param 
  // k = last index in string - i (0 @ the start) comparing at index -> this is to check from front to back -> to dynamically recalculate k index value at each recursive call 
  let k = s.length - 1 - i;
  // ternary: return true if we get to the middle of the string (1 charactet left or we are passed that, the i pointer has advanced etc) ELSE return if first === last + recursively run with updated starting index 
  return i >= k ? true : s[i] === s[k] && isPalindrome(s, i + 1);
}

// * with tail call recursion
// depends on compilers -> some may optimize others it may not save you much, but worth metnioning -> don't make the mistake of thinking the recursive algo will not use additonal space (spoiler alert: it typically will) 
const isPalindrome3Point5 = (s, i = 0) => {
  // similar to logic above
  // create a variable to dynamically keep track of last index or K index value pointer
  let k = s.length - 1 - i;
  // if we are at the middle or out of bounds, either i or k has overlapped 
  if(i >= k) return true; 
  if(s[i] !== s[k]) return false;
  // return the recursive function
  return isPalindrome(s, i + 1); 
}


// * fourth attempt: iteratively traverse without extra space usage aka pointers

// roadmap: 
// pointers @ first and last characters
// compare the two, keep moving, if not return false
// keep moving: move pointers accordingly up 1 down 1 -> when pointers overlap we are done

// * time complexity: O(N) -> half iteration through the string but still converges to linear time 
// * space complexity: no auxiliary data storage usage -> O(1)

// * test cases!
console.log(isPalindrome('a')) // -> true
console.log(isPalindrome('abcdefghihgfeddcba')) // -> false
console.log(isPalindrome('abba')) // -> true
