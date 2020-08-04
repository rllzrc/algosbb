// ** Day 3 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Valid Palindrome! }

// T A S K !!

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// * first attempt:
const isPalindrome1 = s => {
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

// * second attempt:
const isPalindrome = s => {
  // quick edge case checks!
  if(s.length === 1) return true;
  // create pointer variables
  let left = 0;
  let right = s.length - 1;
  // iterate while left is less than right aka while they havent met yet
  while(left < right) {
    // check if left is less than right and is alphanumeric
    while(left < right && s[left] && !s[left].match(/^[a-z0-9]+$/i)) {
      // increment left
      left += 1;
    }
    // check right variable
    while(left < right && s[right] && !s[right].match(/^[a-z0-9]+$/i)) {
      // decrement right
      right -= 1;
    }
    // left and right has not crossed or pointing at an alphanumeric character or not the same
    if(left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    // increment values
    left += 1;
    right -= 1;
  }
  // havent found two characters that are not the same
  return true;
}

// * test cases!
console.log(isPalindrome("A man, a plan, a canal: Panama")); // -> true
console.log(isPalindrome("race a car")); // -> false