// ** AE: Arrays Reps Challenge  
// ** --> { Sorted Squared Array !!! }

// T A SK !!!

// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

// * main squeeze:
// brute force approach: traverse array, square each element, and if it contains negative numbers, sort it again prior to the return

// * first attempt ~
// * time complexity: O(nlogn) - due to additionally sorting 
// * space complexity: O(N) N = length of the input array

const sortedSquaredArray = array => {
  // init sorted array for return
  const sortedSquares = new Array(array.length).fill(0);
  // traverse through input
  for(let i = 0; i < array.length; i += 1) {
    // create a variable to store current element
    const currentNum = array[i];
    // do some maths
    sortedSquares[i] = currentNum * currentNum;
  }
  // sort it out at the end for negative edge cases
  sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
};