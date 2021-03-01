using System;
using System.Collections;

// ** AE: Arrays Daily Reps Challenge ~ C# Edition! 
// ** --> { Two Number Sum !!! }

// T A SK !!!

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numnbers sum up to the traget sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum. 

// * --- Roadmap --- *
// input: array of integers + a number representing target sum 
// output: array of integers which sum up to target 
// constraints: optimize
// edge cases: cannot add a number to itself to reach target sum 

// * time complexity:
// * space complexity: 

// iterative solution, first attempt:
// time: O(N^2) -> nested for loop
// space: O(1) -> no extra space, just two variables for readability no hash table etc
public class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
    for(int i = 0; i < array.Length; i += 1) {
      int firstNum = array[i];
      for(int k = i + 1; k < array.Length; k += 1) {
        int secondNum = array[k];
        // check sum with target value
        if(firstNum + secondNum == targetSum) {
          return new int[] { firstNum, secondNum };
        }
      }
    }
    return new int[0];
  }
}

// * second attempt using cache
// * time: O(N)
// * space: O(N) -> storing values in hash table

// code this out here ~

// * third attempt via sorting array (quicksort, mergesort, etc) - O(N log N) time ~ O P T I M I Z E D ~
// * time: O(nLog(n)) -> a bit iffy compared to above due to sort
// * space: O(1) -> if you value space efficiency more than time 

// code this out here ~