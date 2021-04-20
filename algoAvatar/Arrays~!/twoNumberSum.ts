// ** AE: Arrays Reps Challenge  ~ TS Edition!! ~
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

export function twoNumberSum(array: number[], targetSum: number) {
  for(let i = 0; i < array.length - 1; i += 1) {
    const firstNum = array[i];
    for(let k = i + 1; k < array.length; k += 1) {
      const secondNum = array[k];
      // check math, if both are equal to the target
      if(firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}