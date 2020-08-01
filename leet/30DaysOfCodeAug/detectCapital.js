// ** Day 1 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Detect Capital! }

// T A S K !!
// Given a word, you need to judge whether the usage of capitals in it is right or not.

// We define the usage of capitals in a word to be right when one of the following cases holds:

//     All letters in this word are capitals, like "USA".
//     All letters in this word are not capitals, like "leetcode".
//     Only the first letter in this word is capital, like "Google".

// Otherwise, we define that this word doesn't use capitals in a right way. 

// * first attempt:
const detectCapitalUse = word => {
  return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};

// * second attempt: easier to read
// time complexity:
// * Constant --> O(1)
const detectCapitalUse = word => {
  // check if all caps
  if(word.toUpperCase() === word) return true;
  // check if all lowercase
  if(word.toLowerCase() === word) return true;
  // check first character is caps only
  if(word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase() === word) return true;
  // else 
  return false;
}

// * test cases
console.log(detectCapitalUse('FlaG')); // -> false
console.log(detectCapitalUse('Google')); // -> true
console.log(detectCapitalUse('apple')); // -> true
console.log(detectCapitalUse('TACO')); // -> true
console.log(detectCapitalUse('TAcooO')); // -> false