// * Day 9 of 30 days of code challenge! --> Backspace String Compare

// TASK:
// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// example:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

const backspaceCompare = (S, T) => {
  
  // remember the most recently typed thing and then before that
  // last in first out --> do a stack data structure

  // to simulate the action of a backspace key, use the stack and do a pop operation when we want to delete the previous character
  // then join the stack/array as a string
  // then compare strings to return a boolean
  const buildStack = (S) => {
    let stack = [];
    // loop through length of string 1
    for(let i = 0; i < S.length; i += 1) {
      // check if current element is === to a "#"
      if(S[i] === '#') {
        stack.pop() // --> if the array is empty, return undefined
      } else {
        stack.push(S[i]);
      }
    }
    return stack.join('');
  }
  return buildStack(S) === buildStack(T);
}



// * test cases!
console.log(backspaceCompare("ab#c", "ad#c")); // --> true
console.log(backspaceCompare("ab##", "c#d#")); // --> true
console.log(backspaceCompare("a##c", "#a#c")); // --> true
console.log(backspaceCompare("a#c", "b")); // --> false
