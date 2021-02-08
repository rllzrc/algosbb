// ** AE: Arrays Reps Challenge  
// ** --> { Kadane's Algorithm !!! }

// T A SK !!!

// Write a function that takes in a non-empty array of integers and returns the maximum sum that can be obtaned by summing up all of the integers in a non-empty subarray of the input array. A subarray must only contain adjacent numbers (numbers next to each other in the input array). 


// * --- Roadmap --- *
// input: an array of integers 
// output: integer (max sum) 
// constraints: optimize 
// edge cases: 

// * main squeeze:
// initialize maxIndex and maxSoFar (max sum) variables, set to first value in array to serve as our base case
// iterate through rest of array starting at index 1
// perform these two formulas at each point:
// maxIndexEnd = update the max index end point by taking the absolute or max value of the current number BY ITSELF or the current num + previous value of MaxIndexEnd
// update max sum so far after the above
// return out max at the end of the calculation 

// * time complexity: O(N) >> N = length of array
// * space complexity: O(1) >> only utilizing pointer variables 

// * first attempt: 
const kadanesAlgorithm = array => {
  // initialize variables to keep track of max index and max sum so far
  const maxIndexEnd = array[0];
  const maxSum = array[0];
  for(let i = 1; i < array.length; i += 1) {
    // create a variable to store current num in for ease of use later
    let current = array[i];
    // update maxIndexEnd value
    maxIndexEnd = Math.max(current, maxIndexEnd + current);
    // similarly update max so far sum
    // important to do this after updating the max index
    maxSum = Math.max(maxSum, maxIndexEnd);
  }
  return maxSum; 
};




