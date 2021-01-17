// ** AE: Arrays Reps Challenge  
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
const twoNumberSum = (array, targetSum) => {
  for(let i = 0; i < array.length; i += 1) {
    const firstNum = array[i];
    // iterate through the rest of the nums in the array
    for(let k = i + 1; k < array.length; k += 1) {
      const secondNum = array[k];
      // check if both equate to target value
      if(firstNum + secondNum === targetSum) {
        // return out an array of those two values
        return [firstNum, secondNum];
      }
    }
  }
  // else, return empty array
  return [];
};

// * second attempt using cache
// * time: O(N)
// * space: O(N) -> storing values in hash table 
const twoNumberSum2 = (array, targetSum) => {
  // initialize hash table aka cache object
  const cache = {};
  // loop through array 
  for(const num of array) {
    // x + y = 10 or y = 10(target sum) - x 
    // if y or 'match' is in hash table / cache, return x and y
    const match = targetSum - num;
    if(match in cache) {
      return [match, num];
    } else {
      // store current num in the hash table 
      cache[num] = true;
    }
  }
  return []; 
};

// * third attempt via sorting array (quicksort, mergesort, etc) - O(N log N) time ~ O P T I M I Z E D ~
// * time: O(nLog(n)) -> a bit iffy compared to above due to sort
// * space: O(1) -> if you value space efficiency more than time 

const twoNumberSum3 = (array, targetSum) => {
  // sort out array
  array.sort((a, b) => a - b);
  // initialize pointer values -> left at start, right at end
  let left = 0;
  let right = array.length - 1;
  while(left < right) {
    const currentSum = array[left] + array[right];
    if(currentSum === targetSum) {
      return [array[left], array[right]];
    } else if(currentSum < targetSum) {
      // increase the left pointer
      left += 1;
    } else if(currentSum > targetSum) {
      // move the right pointer to the left by one position
      right -= 1; 
    }
  }
  return []; 
}