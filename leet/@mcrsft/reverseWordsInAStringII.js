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

// * time complexity: 
// * space complexity: 

// * first attempt using built-in  methods
const reverseWords = s => {
  
}