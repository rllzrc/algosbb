// ** @mcrsft Arrays + Strings Reps Challenge  
// ** --> { reverse string !!! }

// T A SK !!!

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// * --- Roadmap --- *
// input: array of strings
// output: array of strings in reverse 
// constraints: no extra auxiliary space (for another array), modify the input array in place with O(1) extra memory.
// edge cases: 

// * main squeeze:
// two pointer approach -> one at the beginning + at the end
// iterate while left is < right
// swap left with right index value
// move left pointer 1 step to the right, then right pointer one step to the left

// * time complexity: 
// * space complexity: 

// * first attempt using built-in  methods
const reverseWords = s => {
  // convert string to array, filter out trailing spaces, reverse it, and then convert it to a string again 
  let reversed = s.split(' ').filter(e => e !== '');
  return reversed.reverse().join(' ');
};

// * second attempt:
// 2 pointer approach
const reverseWords = s => {
  // sanitize sentence
  // convert to array, filter out white spaces 
  let sanitizedSentence = s.split(' ').filter(e => e !== ''); 
  // console.log(sanitizedSentence);
  // initiate pointers
  let left = 0;
  let right = sanitizedSentence.length-1;
  // iterate while left is smaller than right, work towards the middle of the sentence
  while(left < right) {
    // perform in place swap
    [sanitizedSentence[left], sanitizedSentence[right]] = [sanitizedSentence[right], 
    sanitizedSentence[left]]
    console.log('left', [left]);
    console.log('right', [right]);
    // adjust pointers accordingly 
    left += 1;
    right -= 1;
  }
  // convert sentence to a string
  return sanitizedSentence.join(' ');
};