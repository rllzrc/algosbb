// ** Leetcode: Reps Challenge ~ 
// ** --> { #20 Valid Parentheses!! }

// T A SK !!!

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// * overall strategy tip:
// 1. figure out brute force logic (get her done!)
// 2. write pseudocode as you talk it out ^ to unpack thoughts in your brain -- to also make sure you have the bandwidth to proceed while showing the other person what you are doing + visualize it for yourself!
// 3. translate above to code --> least amount of time here --> syntax isn't the prime concern, logic showcase as most folks have broad ranges when it comes to preferred programming language

// * summary:
// figure out main meat and potatoes first -> (find the recipe)
// translate it to the computer (the meta stuff) -> to prep it (ingredients gathering)
// explain what you're thinking of and WHY you think you need said data structure, variable, helper function, etc. (so that way they are more inclined to help you help yourself figure it out ahhh ~)

// * first attempt:
const isValid = s => {
  const stack = [];
  const dictionary = {
    '(':')',
    '[':']',
    '{':'}'
  }

  for(let i = 0; i < s.length; i += 1) {
    // check if current element is an opening bracket
    if(s[i] === '(' || s[i] === '[' || s[i] === '}') {
      // add to stack -- great for keeping track of pairs from an inner/outer perspective
      stack.push(s[i]);
    } else {
      // if its a closing bracket, compare with counterpart on top of stack to see if they match the corresponding pair per dictionary
      if(s[i] === ')' || s[i] === ']' || s[i] === '}') {
        let counterpart = stack.pop();
        if(s[i] !== dictionary[counterpart]) return false;
      }
    }
  }
  // stack must be empty in order for it to be valid parens
  if(stack.length !== 0) return false;
  return true; 
};
