// ** AE: Arrays Reps Challenge  
// ** --> { Smallest Difference !!! }

// T A SK !!!

// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and returns an array containing these two numbers, with the number from the first array in the first position.

// Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference.

// * --- Roadmap --- *
// input: array of integers + a number representing target sum 
// output: array of triplets that sum up to the target sum
// constraints: optimize, using sort 
// edge cases: if two nums equal each other, then we found the pair! Return out ~

// * time complexity: O(nLog(n) + mLog(m)) -> n = length of array1 m = length of array2
// * space complexity: O(1) -> no extra space stored that depends on length of inputs >> only storing a few things, differences, pairs, etc..
// More space usage if sorting in place is not available 

const smallestDifference = (arrayOne, arrayTwo) => {
  // sort both arrays
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  // declare pointer variables, these will act as index markers for the arrays
  let idxOne = 0;
  let idxTwo = 0;
  // declare variable to keep track of smallest difference
  // set at infinity = greater than everything so it will update smallest accordingly 
  let smallest = Infinity;
  // this will represent the current difference
  let current = Infinity;
  // declare output value
  let smallestPair = [];
  // while both of our pointers are valid and pointing at indices that are within bounds of the arrays, we will perforn comparisons ~
  while(idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    // declare pointers
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    // current = Math.abs(firstNum - secondNum)
    if(firstNum < secondNum) {
      // update the current smallest difference to be secondNum - firstNum -> make the gap between the numbers smaller 
      current = secondNum - firstNum;
      // increment left pointer -> pointing at array1 (idx1)
      idxOne += 1;
    } else if(secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo += 1;
    } else {
      // they're equal to each other
      return [firstNum, secondNum];
    }
    // update the smallest difference
    if(smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}