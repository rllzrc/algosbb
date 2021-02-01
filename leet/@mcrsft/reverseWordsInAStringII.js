// ** @mcrsft Arrays + Strings Reps Challenge  
// ** --> { reverse words in a string ii !!! }

// T A S K !!!

// Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters. The input string does not contain leading or trailing spaces. The words are always separated by a single space.

// N O T E :
// Could you do it in-place without allocating extra space?


// * --- Roadmap --- *
// input: string
// output: string reversed word by word
// constraints: no extra auxiliary space (for another array), modify the input array in place with O(1) memory
// edge cases: optimize 

// * main squeeze:
// two pointer approach -> one at the beginning + at the end
// iterate while left is < right
// swap left with right index value
// move left pointer 1 step to the right, then right pointer one step to the left

// * time complexity: O(N)
// * space complexity: O(1)

// * first attempt using built-in  methods
const reverseWords = s => {
  // sanitize string, reverse whole string first
  s.reverse();
  // create two pointer variables to keep track of index values
  let i = 0;
  let k = 0;
  while(k <= s.length) {
    // check for empty spaces or if we've reached the end
    if(s[k] === ' ' || k === s.length) {
      // create left and right pointer variables
      let left = i;
      let right = k - 1; 
      // console.log('s[k]', s[k]);
      console.log('left', left);
      console.log('right', right);
      while(left < right) {
        // perform in place swap 
        [s[left], s[right]] = [s[right], s[left]];
        // increment pointers
        left += 1;
        right -= 1;
      }
      i = k = k + 1;
    } else {
      k += 1; 
    }
  }
};

// * second attempt:
// with reverse helper function ~
const reverseWords2 = s => {
  // run reverse function on input string, reverse entire string first 
  reverse(s, 0, s.length-1);
  // create a variable for left pointer
  let left = 0;
  // iterate as long as i is within s boundary 
  for(let i = 0; i <= s.length; i += 1) {
    const current = s[i];
    if(current === ' ' || i === s.length) {
      // we're in between words or at the end of the string
      reverse(s, left, i - 1);
      // to proceed with the next character 
      left = i + 1;
    }
  }
  return s;
};

// * reversal helper function
function reverse(s, start, end) {
  let mid = Math.floor((start + end) / 2);
  let k = end;
  for(let i = start; i <= mid; i += 1) {
    // perform swap in place swap
    [s[i], s[k]] = [s[k], s[i]];
    k -= 1;
  }
};
