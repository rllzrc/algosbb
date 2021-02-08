// ** @mcrsft Arrays + Strings Reps Challenge  
// ** --> { reverse string !!! }

// T A SK !!!

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// * --- Roadmap --- *
// input: string of special characters (parentheses)
// output: boolean 
// constraints: optimize
// edge cases: 

// * main squeeze:


// * time complexity: 
// * space complexity: 

// * first attempt: using a stack data structure
const isValid = s => {
  // create a map to store key/val pairs -> pro tip: MAP remembers the original insertion order of the keys and any value may be used as either key or value >> using literal object for ease for now 
  const key = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  // create stack to keep track of values
  let stack = [];
  for(let char of s) {
    if(['(', '{', '['].includes(char)) stack.push(char);
    else if(key[char] !== stack.pop()) return false;
  }
  // if empty that means we've matched all the pairs
  return stack.length === 0;
};