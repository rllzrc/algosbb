// ** AE: Arrays Reps Challenge  
// ** --> { Monotonic Array !!! }

// T A SK !!!

// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing. 

// The elements aren't necessarily exclusively decreasing or increasing; they simply don't do either. 

// Note that empty arrays and arrays of one element are monotonic. 

// * N O T E ~
// mathematics concept => monotonic if it is entirely non-decreasing or non-increasing
// either or -> from left to right are all of the integers entirely non-decreasing or entirely non-increasing
// checking for 2 potential conditions, not just one
// check the trend of numbers, what direction is it going up or down

// * --- Roadmap --- *
// input: an array of integers 
// output: boolean 
// constraints: 
// edge cases: can have integers that are equal to each other in the array to be considered monotonic -> (i.e. = [-10, -1100, -1100, -11001])

// * main squeeze:
// must traverse entire array to check each element
// view it first as is it strictly increasing or strictly decreasing (distinct integers, not going to have two of the same integer)
// determine the direction that the array might be going in -> is it going up or down?
// look at first two integers and compare them
// at each element, compare where we are at with the previous and ensure the direction matches the inital we found 
// PRO-TIP: MONOTONIC = we can have two intergers equal to each other, dupes -> so this may not work 
// to determine the direction: instead of just looking at first two values, we can start with that then check direction (was it up or down) -> then compare the difference of the two values with that direction variable
// compare pair of numbers with the direction trend

// * time complexity: O(N) -> N = length of array -> must check each element to ensure monotonicity throughout 
// * space complexity: O(1) -> constant space, just keeping track of two variables 

// * first attempt: the v verbose version 
const isMonotonic = array => {
  // edge case check 
  if(array.length <= 2) return true; 
  // create a variable to keep track of direction trend (up, down, flat => enum if production level code but its v v verbose) so just use a difference value for now
  let direction = array[1] - array[0];
  // iterate through the array
  for(let i = 2; i <= array.length; i += 1) {
    // check direction -- check if it is equal to zero if so they are equal to each other
    if(direction === 0) {
      // take the new difference between current num and previous num, update + store it in direction variable 
      direction = array[i] - array[i - 1];
      continue;
    }

    // are we breaking the direction?
    // pass in current direction status, previous element, current element to helper function to determine that result
    if(breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}

// * helper function to check if direction is broken or not
const breaksDirection = (direction, previousNum, currentNum) => {
  // check the difference of the values and compare to current direction trend
  let difference = currentNum - previousNum;
  // check if trending upwards
  // if positive aka greater than 0
  if(direction > 0) {
    return difference < 0;
  }
  // at this point the direction is less than 0, if it is negative, then we are not trending up anymore
  return difference > 0; 
};

// * second solution: the simpler, cleaner version >> less error-prone approach ~

// ~ main squeeze:
// confirm if the array is entirely non decreasing ONLY (eliminate one aspect of the monotonicty of the array)
// iterate through the array, compare pairs of nums and see if they are trending upwards
// do the same thing for the non increasing version (are they trending downards)
// do one iteration for the entire array (assuming it is entirely non dec + non inc) -> at every point, check if current is smaller than previous 
// two things that are potentially true -> return if one of these two things are still true at the end 

// * time complexity: O(N)
// * space complexity: O(1)
const isMonotonic2 = array => {
  // declare two variables to perform checks
  // tredning upwards
  isNonDecreasing = true;
  // trending downwards 
  isNonIncreasing = true;
  // iterate through the array -> we can iterate just once
  for(let i = 1; i <= array.length; i += 1) {
    // no need to check if the array length is greater than 2 here since we are not computing direction based off the first two numbers 
    // check if the current element is smaller than the previous index, then isNonDecreasing is false
    if(array[i] < array[i - 1]) {
      // we are decreasing if it is a smaller value
      isNonDecreasing = false; 
    }
    // check for the opposite case
    if(array[i] > array[i - 1]) {
      // if current value greater than previous value, then we are trending up 
      isNonIncreasing = false;
    }
  }
  // use ternary to evaluate which 
  // if either one or both are true then the array is monotonic
  return isNonDecreasing || isNonIncreasing; 
};


