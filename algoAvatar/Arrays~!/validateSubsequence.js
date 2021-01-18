// ** AE: Arrays Reps Challenge  
// ** --> { Validate Subsequence !!! }

// T A SK !!!

// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4] and so do the numbers [2,4]. Note that a single array and the array itself are both valid subsequences of the array.

// * --- Roadmap --- *
// input: two arrays
// output: boolean
// constraints: optimize
// edge cases: even though the while loop may "short-circuit" if elements in the sequence are found prior to the end of the main array, it is still considered a linear solution as it is a minimal effect in the grand scheme of things. 

// * time complexity: O(N) -> N = length of main array, first
// * space complexity: O(1) 

// main squeeze: by the end of the loop, we've either traversed the entire sequence or main array or both -> if we've gone through the entire sequence by the end of the while loop, then all elements are matched so there will be a valid subsequence ~

// * first solution: using a while loop to traverse both in tandem, keeping track of position in both arrays 
const validateSubsequence = (array, sequence) => {
  // initialize pointer variables - to keep track of position in both arrays
  let arrIdx = 0;
  let seqIdx = 0;
  // iterate while we're in bounds
  while(arrIdx < array.length && seqIdx < sequence.length) {
    // check to see if element in main array is equal to the element in the sequence ~ looking for a M A T C H ~
    if(array[arrIdx] === sequence[seqIdx]) {
      // then we found a match! move the position in the sequence by 1
      seqIdx += 1;
    }
    // regardless of whether or not we have a match, we gotta keep going forward in the main array
    arrIdx += 1; 
  }
  // check if seqIdx = length of seq, if true yes if false not a subsequence 
  return seqIdx === sequence.length;
  // * we will only have a valid subsequence IF the seqIdx is equal to the length of the sequence 
};

// * second solution: using a for loop to traverse main array, keeps track of position only in second array