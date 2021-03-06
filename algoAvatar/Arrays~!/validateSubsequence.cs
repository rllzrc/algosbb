using System;
using System.Collections;
using System.Collections.Generic;

// ** AE: Arrays Reps Challenge ~ C# Editon 
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

// add code here ~
public class Program {
  public static bool IsValidSubsequence(List<int> array, List<int> sequence) {
    // initialize pointer variables
    int arrayIndex = 0;
    int sequenceIndex = 0;
    // check within bounds
    while(arrayIndex < array.Count && sequenceIndex < sequence.Count) {
      // check arrayIndex with sequenceIndex values
      // continue if still valid
      if(array[arrayIndex] == sequence[sequenceIndex]) {
        sequenceIndex += 1;
      }
      // go to the next index
      arrayIndex += 1;
    }
    // if true, valid
    return sequenceIndex == sequence.Count;
  }
}

// * second solution: using a for loop to traverse main array, keeps track of position only in second array

// add code here ~