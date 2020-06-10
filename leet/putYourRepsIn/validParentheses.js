// * Put Your Reps In! 
// *** Valid Parentheses -> #20

// T A S K !!
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// * first attempt:
// order matters -> use stack DS
// push opening brace to stack
// everytime we see a closing character, needs to match the item on top of the stack (and make sure stack is not empty)
// if it doens't its invalid
const isValid = s => {
  // create a stack variable to keep track of opening braces
  const stack = [];
  // iterate and for every character in s check if it is equal to opening braces
  for(let i = 0; i < s.length; i += 1) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
      // push it into the stack!
      stack.push(s[i]);
    } else if(s[i] === ')' && !stack.length && stack.length-1 === '(') {
      // check conditions if closing character
      // pop it off the stack, it checks out
      stack.pop();
    } else if(s[i] === ']' && !stack.length && stack.length-1 === '[') {
      stack.pop();
    } else if(s[i] === '}' && !stack.length && stack.length-1 === '{') {
      stack.pop();
    } else {
      // if none of the above suffices, not balance so return false
      console.log(stack);
      return false;
    }
  }
  return true;
}

// * test cases!!
console.log(isValid("()")); // -> true
console.log(isValid("()[]{}")); // -> true
console.log(isValid("(]")); // -> false
console.log(isValid("([)]")); // -> false
console.log(isValid("{[]}")); // -> true 