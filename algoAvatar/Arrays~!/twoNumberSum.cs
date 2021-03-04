using System;
using System.Collections;
using System.Collections.Generic;

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
  public static int[] TwoNumberSum(int[] array, int targetSum) {
    // nested loop to check prev + next element, store in variables 
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

public class Program {
  public static (int[] TwoNumberSum[int] array, int targetSum) {
    // init HashSet to store pairs
    HashSet<int> nums = new HashSet<int>();
    foreach(int num in array) {
      // formula to find target sum, opposite of addition is subtraction thus targetSum - num stored in potential element/variable
      int potentialMatch = targetSum - num;
      if(nums.Contains(potentialMatch)) {
        // if found in set, return out pair
        return new int[] { potentialMatch, num };
      } else {
        nums.Add(num);
      }
    }
    return new int[0];
  }
}

// * third attempt via sorting array (quicksort, mergesort, etc) - O(N log N) time ~ O P T I M I Z E D ~
// * time: O(nLog(n)) -> a bit iffy compared to above due to sort
// * space: O(1) -> if you value space efficiency more than time 

// code this out here ~
public class Program {
  public static int[] TwoNumberSum(int[] array, int targetSum) {
    Array.Sort(array);
    int left = 0;
    int right = array.Length - 1;
    while(left < right) {
      int currentSum = array[left] + array[right];
      if(currentSum === targetSum) {
        return new int[] { array[left], array[right] };
      } else if (currentSum < targetSum) {
        left += 1;
      } else if (currentSum > targetSum) {
        right -= 1;
      }
    }
    return new int[0];
  }
}