// * Put Your Reps In!
// * { Sliding Window !! }

// Looking for subsets? Keeping track of subsets?
// T A S K !!
// Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

// * first attempt: naive solution
// time complexity:
// * Quadratic -- O(N^2)
const maxSubArraySum = (arr, n) => {
  // quick edge case check
  if(num > arr.length) {
    return null;
  }
  // create a max variable to keep track of, set to -infinity
  let max = -Infinity;
  // iterate through the end of the array 
  // subtract num since length of window will be num + 1 to account 0 based index value
  // this is to ensure temp is still within bounds
  for(let i = 0; i < arr.length - num + 1; i += 1) {
    // create a temp variable to keep track of
    temp = 0;
    // iterate up through num value
    // this is the length of the "window"
    for(let k = 0; k < num; k += 1) {
      // reassign temp variable
      // summing up values "in between the window"
      temp += arr[i + k];
    } 
    // check if temp is greater than max
    if(temp > max) {
      max = temp;
    }
  }
  return max;
}

// * test cases!!
console.log(maxSubArraySum([1,2,5,2,8,1,5], 2)); // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)); // 17
console.log(maxSubArraySum([4,2,1,6], 1)); // 6
console.log(maxSubArraySum([4,2,1,6,2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null