// ** AE: Arrays Reps Challenge  
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

const threeNumberSum = (array, targetSum) => {
  // sort the input array 
  array.sort((a, b) => a - b);
  // declare output variable
  const triplets = [];
  // iterate through input array
  // * why up until array.length-2?! we are looking for triplets, we always want to have 3 nums -> left + right + currentNum (i) pointer so our last currentNum (first num in triplets output array) has to be the third value from the end of the array (because we want to have at least two other values to try to sum it up with)
  // i = currentNum 
  for(let i = 0; i < array.length - 2; i += 1) {
    // initialize left and right pointers
    // left = the index just to the righ of i
    let left = i + 1;
    // right - the final index in the array
    let right = array.length - 1;
    // iterate while left and right are not overlapping or past each other - to ensure we're in bounds
    while(left < right) {
      const currentSum = array[i] + array[left] + array[right]
      // check currentSum against targetSum
      if(currentSum === targetSum) {
        // we found a valid triplet!
        // append to array
        triplets.push([array[i], array[left], array[right]]);
        // increment left because we know that if we only move one we will be dealing with a sum that is greater than our targetSum for sure
        left += 1;
        // same with right, dealing with sum that will def be less than target sum thus change both pointers
        right -=1; 
      } else if(currentSum < targetSum) {
        // increment left ONLY to guarantee a greater current sum 
        left += 1
      } else if(currentSum > targetSum) {
        // decrement right ONLY to guarantee a smaller current sum
        right -= 1; 
      }
    }
  }
  return triplets; 
};