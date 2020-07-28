// * Put Your Reps In!
// * { Sliding Window !! }

// Looking for subsets? Keeping track of subsets?
// T A S K !!
// Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 

// * first attempt: naive solution
// time complexity:
// * Quadratic -- O(N^2)
const maxSubArraySum1 = (arr, num) => {
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
};

// * second attempt: refactor with sliding window approach!
// time complexity:
// * Linear -- O(N)
const maxSubArraySum = (arr, num) => {
  // quick edge case check:
  if(arr.length < num) return null;
  // create a maxsum and temp variable to keep track of
  let max = 0;
  let temp = 0;
  // iterate through num
  // add up values of all elements up until num
  // save that value to max -- create the first sum in max
  for(let i = 0; i < num; i += 1) {
    max += arr[i];
  }
  temp = max;
  // iterate through arr, starting at num's value since we just added it above already 
  // this is establishing the sliding window approach
  for(let i = num; i < arr.length; i += 1) {
    // subtract previous element starting from the beginning of the array and add the next element to the window 
    // instead of summing up all those values again (no need to recalculate)
    temp = temp - arr[i - num] + arr[i];
    // take the max value between max and temp variables
    // similar to if statement on line 32
    max = Math.max(max, temp);
  }
  return max;
};

// * test cases!!
console.log(maxSubArraySum([1,2,5,2,8,1,5], 2)); // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)); // 17
console.log(maxSubArraySum([4,2,1,6], 1)); // 6
console.log(maxSubArraySum([4,2,1,6,2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null