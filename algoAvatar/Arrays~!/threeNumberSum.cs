using System;
using System.Collections;
using System.Collections.Generic;

// ** AE: Arrays Reps Challenge ~ C# Edition
// ** --> { Three Number Sum !!! }

// T A SK !!!

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numnbers they hold.

// If no three numbers sum up to the target sum, the function should return an empty array. 

// * --- Roadmap --- *
// input: array of integers + a number representing target sum 
// output: array of triplets that sum up to the target sum
// constraints: optimize
// edge cases:

// * main squeeze: 
// sort array 
// have 3 pointers -> currentNum starts at index 0, left starts at index 1, and right (last index)
// while left is smaller than right, currentSum = currentNum + left + right
// if cS = target, append triplet to output array, move both pointers
// if cS < target, increase left by 1
// if cS > target, decrease right by 1

// * time complexity: O(N^2) -> N = length of array >> iterating over main array at least once + additional while loop to reset pointers, add triplets, etc.
// * space complexity: O(N) -> for output array, we might need to store every single # if it is a valid triplet thus bounded by this space complexity 

// write code here! ~

public class Program {
  public static List<int[]> ThreeNumberSum(int[] array, int targetSum) {
    // first sort out array elements
    Array.Sort(array);
    // create a variable to store triplets in list format, this will be the output as well 
    List<int[]> triplets = new List<int[]>();
    for(int i = 0; i < array.Length - 2; i += 1) {
      // initiate pointer variables 
      int left = i + 1;
      int right = array.Length - 1;
      // check within bounds and keep looping if true
      while(left < right) {
        // create a variable to store currentSum per iteration 
        int currentSum = array[i] + array[left] + array[right];
        // if found, setup new variable to store triplets in 
        if(currentSum == targetSum) {
          int[] newTriplets = { array[i], array[left], array[right] }; 
          triplets.Add(newTriplets);
          // update pointers accordingly 
          left += 1;
          right -= 1;
        } else if(currentSum < targetSum) {
          // increment left pointer to guarantee a larger currentSum next iteration 
          left += 1;
        } else if(currentSum > targetSum) {
          // increment right pointer to guarantee a smaller currentSum next iteration 
          right -= 1; 
        }
      }
    }
    return triplets; 
  }
}