// ** AE: S T A C K S ~ REP Challenges! 
// ** --> { Balanced Brackets !!! }

// T A SK !!!

// Write a function that takes in a string made up of brackets and other optional characters. The function should return a boolean representing whether the string is balanced with regards to brackets.

// A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched. Note that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in [(]).


// * --- Roadmap --- *
// input: a string of brackets + other optional characters
// output: boolean
// constraints: optimize 
// edge cases: 

// * main squeeze:
// use stack data structure -> last in first out property comes in handy 
// keep track of every pair of matching brackets -> for every opening, we want to find its corresponding closing bracket
// we use a stack ds to keep track of opening brackets
// traverse string + at each character check if it is an opening bracket, if current is true then push it into the stack
// if it is a closing bracket, first check that the stack is not empty (if it is, then that means we do not have any opening brackets that we can try to match this closing one to) then check last bracket and see if it corresponds to they type of what we're currently at -> if no, then not balanced + vice versa
// if a match is found, get rid of the pair (pop it off the stack)
// at the end of the iteration, if the stack is empty then it is all balanced, if there are items then it will be false since it is unmatched 

// * time complexity: O(N) -> N = length of the string, must traverse entire string => at each character we are checking against a few characters + constant time operations via stack methods of push + pop 
// * space complexity: O(N) -> N = length of the string => storing values in stack

// * first attempt: 
const balancedBrackets = string => {
  // initialize variables -> can also be an array of these strings 
  const openBrackets = '([{'
  const closeBrackets = ')]}'
  // create a map of matching brackets
  // hash table or object, match every closing bracket to its corresponding opening bracket
  const matches = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  // initialize stack to be an empty array
  const stack = [];
  // iterate through string
  for(const char of string) {
    // check for opening 
    if(openBrackets.includes(char)) {
      stack.push(char);
    } else if(closeBrackets.includes(char)) {
      // either the stack is empty
      // no possible match, imbalanced check if empty first
      if(stack.length === 0) return false;
      // check if it is the corresponding or appropriate type
      // check last element in stack, if it matches the closing via our matches table
      if(stack[stack.length - 1] === matches[char]) {
        // remove final value in stack
        stack.pop();
      } else {
        // if no match, it is still imbalanced
        return false;
      }
    }
  }
  // check if stack is empty 
  // if so, we're good if not it is imbalanced
  return stack.length === 0;
};




