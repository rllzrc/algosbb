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
const isValid1 = s => {
  // create a stack variable to keep track of opening braces
  const stack = [];
  // iterate and for every character in s check if it is equal to opening braces
  for(let i = 0; i < s.length; i += 1) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
      // push it into the stack!
      stack.push(s[i]);
    } else if(s[i] === ')' && stack.length !== 0 && stack.length-1 === '(') {
      // check conditions if closing character
      // pop it off the stack, it checks out
      console.log('in the if!');
      stack.pop();
    } else if(s[i] === ']' && stack.length !== 0 && stack.length-1 === '[') {
      stack.pop();
    } else if(s[i] === '}' && stack.length !== 0 && stack.length-1 === '{') {
      stack.pop();
    } else {
      // if none of the above suffices, not balance so return false
      console.log(stack);
      return false;
    }
  }
  return stack.length === 0;
}

// * second attempt: use stack DS
const isValid2 = s => {
  // create a stack DS to keep track of opening braces
  const stack = []; // -> FIFO use push/pop
  // iterate through s
  for(let i = 0; i < s.length; i += 1) {
    // check for opening braces
    if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if(s[i] === ')' && stack.length !== 0 && stack.pop() === '(') {
      stack.pop();
      break;
    } else if(s[i] === ']' && stack.length !== 0 && stack.pop() === '[') {
      stack.pop();
      break;
    } else if(s[i] === '}' && stack.length !== 0 && stack.pop() === '{') {
      stack.pop();
      console.log('in the if! {');
      break;
    } else {
      return false;
    }
    //console.log(stack);
  }
  // in the end, should be empty so return true, if not false
  return stack.length === 0;
}

// * third attempt: use stack DS for open brackes and cache object for bracket pairing
const isValid = s => {
  // quick edge case checks:
  if(s.length === 0) return true;
  // meaning it only has one item, will never make a pair
  if (s.length < 2) return false;

  // create cache object of pairings
  const cache = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  // create stack DS to keep track of open braces
  const stack = [];

  // loop through s and check each element
  for(let char of s) {
    // if open pair, push into the stack
    if(char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      // create a variable to keep track of last item in stack
      const openBracket = stack.pop();
      // check if key in cache does not equal an opening bracket, return false
      // really cool trick where it will iterate throughout object and check the keys, if it does not match either of them return false
      if(cache[char] !== openBracket) return false;
    }
  }
  // at the end, if everything matches we should have an empty stack
  return stack.length === 0;
}


// * test cases!!
console.log(isValid("()")); // -> true
console.log(isValid("()[]{}")); // -> true
console.log(isValid("(]")); // -> false
console.log(isValid("([)]")); // -> false
console.log(isValid("{[]}")); // -> true 