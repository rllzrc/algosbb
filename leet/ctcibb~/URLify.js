// ** ctci  -- Daily Reps! 
// ** --> { URLify !!! }

// T A S K !!
// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. 

// find out how many non space characters
// subtract from true length to calculate # of spaces allowed
// once we run out, we will stop

// Input: string, length (num)
// Output: string
// Constraints: optimization 
// Edge Cases: empty string, spaces in the front, middle and end

// * time complexity:
// * space complexity:

// * first attempt: 
const replaceSpaces = (s, n = s.length) => {
  // first pass:
  // count number of non space chars in string
  // use this num to find out num of spaces allowed: subtract chars from true length n to see how many spaces we are allowed to replace with %20
  // second pass:
  // add to the new string (need an output string since strings are immutable) if we see a space and there are spaces left, append '%20'
  // otherwise copy current character
  // run out of spaces? append empty string instead

  let output = '';
  let chars = 0;
  for(let i = 0; i < s.length; i += 1) {
    // create a variable to store current character
    let curr = s[i];
    if(curr !== ' ') {
      chars += 1;
    }
  }

  // space minus num of non space characters
  let spaces = n - chars;
  for(let i = 0; i < s.length; i += 1) {
    let curr = s[i];
    if(curr === ' ' && spaces > 0) {
      output += '%20';
      // remember to decrease num of spaces after
      spaces -= 1;
    } else if (curr !== ' ') {
      // else if for cases when it is a space yet we run out of spaces, in that case we will skip it and move on to next character in string
      output += curr;
    }
  }

  // if n is not yet reached and there are still spaces left
  while(spaces > 0) {
    output += '%20';
    spaces -= 1; 
  }

  return output; 
};

// * test cases!
console.log(replaceSpaces('Mr John Smith ', 13)); // -> 'Mr%20John%20Smith'
console.log(replaceSpaces('Mr John Smith ', 14)); // -> 'Mr%20John%20Smith%20'
console.log(replaceSpaces('   hi', 7)); // -> '%20%20%20hi%20%20'
console.log(replaceSpaces('   hi', 3)); // -> '%20hi'
console.log(replaceSpaces('hel lo', 5)); // -> 'hello'
console.log(replaceSpaces('', 0)); // -> ''
console.log(replaceSpaces('', 2)); // -> '%20%20'

