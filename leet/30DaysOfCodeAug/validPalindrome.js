// ** Day 3 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Valid Palindrome! }

// T A S K !!

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// * first attempt:
const isPalindrome = s => {
  // quick edge case check
  if(s.length === 0) return true;
  // sanitize str 
  const regex = /\W/gm;
  const clean = [...s.toLowerCase().replace(regex, "")]
  // create pointer variables
  let left = 0;
  let right = clean.length - 1;
  // while i and j havent met
  while(left < right) {
    // check if not the same
    if(clean[left] !== clean[right]) {
      return false;
    }

    // increment left
    left += 1;
    right -= 1;
  }
  return true;
}

// * test cases!
console.log(isPalindrome("A man, a plan, a canal: Panama")); // -> true
console.log(isPalindrome("race a car")); // -> false