// * Day 14 of 30 Days of Code!! --> Perform String Shifts ~

// TASK!!! 

// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

// * Example 1:
// Input: s = "abc", shift = [[0,1],[1,2]]
// Output: "cab"
// Explanation: 
// [0,1] means shift to left by 1. "abc" -> "bca"
// [1,2] means shift to right by 2. "bca" -> "cab"

// * Example 2:
// Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
// Output: "efgabcd"
// Explanation:  
// [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
// [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
// [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
// [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"

// * HINTS!
// Intuitively performing all shift operations is acceptable due to the constraints.
// You may notice that left shift cancels the right shift, so count the total left shift times (may be negative if the final result is right shift), and perform it once.

// * first pass using hint #2: 
const stringShift = (str, shift) => {
  // declare a new variable to hold onto total shifts --> will keep track of the number of characters we need to shift to the right 
  let totalShift = 0;
  // iterate through the shift arr matrix
  for(let i = 0; i < shift.length; i += 1) {

    // declare a new variable to hold on to direction --> from notes above direction is the first element
    let direction = shift[i][0];
    // amount is the second element
    let amount = shift[i][1];
    if(direction === 0) {
      console.log('direction is zero', direction)
      // left shift so subtract from totalShift value
      totalShift -= amount;
      console.log('direction is zero; totalShift:', totalShift);
    } else {
      // right shift so add to totalShift value
      totalShift += amount;
    }
    console.log('total:', totalShift);
  }

  // peform shift operation here:
  let strFront;
  let strBack;
  let length = str.length;

  if (totalShift < 0) { // --> if totalShift is a negative num
    // to standardize: (if shift is greater than the sz of string passed)
    totalShift = Math.abs(totalShift % length)
    console.log('totalShift in first if:', totalShift);
    // left shift
    // abcde
    // left shift by 2

    // strFront = cde
    // strBack = ab
    // strFron + strBack = cdeab
    strFront = str.substring(totalShift);
    strBack = str.substring(0, totalShift);
    console.log('front:', strFront);
    console.log('back:', strBack)

  } else if (totalShift > 0) {
    //console.log('totalShift in 2nd if:', totalShift);
    // if totalShift is positive:
    totalShift = totalShift % length;
    // right shift
    strFront = str.substring(length - totalShift);
    console.log('front:', strFront);
    strBack = str.substring(0, length - totalShift);
    console.log('back:', strBack)

  } else {
    return str;
  }

  return strFront + strBack;
}
// * test cases!

let str1 = 'abc';
let shift1 = [[0,1],[1,2]];
console.log(stringShift(str1, shift1)); // --> 'cab'
let str2 = 'abcdefg';
let shift2 = [[1,1],[1,1],[0,2],[1,3]];
console.log(stringShift(str2, shift2));  // --> 'efgabcd'
