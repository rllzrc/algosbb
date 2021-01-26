// ** @mcrsft Arrays + Strings Reps Challenge  
// ** --> { reverse string !!! }

// T A SK !!!

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

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


// * time complexity: O(N) -> swap N/2 elements
// * space complexity: O(1)

const reverseString = s => {
  // initialize two pointers
  let left = 0;
  let right = s.length - 1;
  // iterate while left is smaller than right
  while(left < right) {
    const temp = s[right];
    // swap values
    s[right] = s[left];
    s[left] = temp;
    // update pointers
    left += 1;
    right -=1;
  }
};
