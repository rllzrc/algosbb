// ** Day 15 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> {  Maximum Sum Circular Subarray! }

// T A S K !!
// Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

// Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

// Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)


// roadmap:
// divide array into 3 parts
// use kadane's algo
// multiply array elements -1; compare K's and CS's sum
// add value to circular sum; if greater return that out else use K
// * first attempt:
const maxSubarraySumCircular = A => {
  // create a variable to store Kadane's max subarray algo results
  let kadane = Kadane(A);
  // create a variable to store circular sum
  let circularSum = 0;

  // loop through the array 
  for(let i = 0; i < A.length; i += 1) {
    // reassign CS value to the sum of all elements
    circularSum += A[i];
    // convert array input to be multiplied by -1 (flip it from original)
    A[i] = -A[i]
    //console.log(A);
  }

  // reassign CS value with modified array
  circularSum = circularSum + Kadane(A);

  // check if CS is greater than K and if its not equal to 0, return that value out
  if(circularSum > kadane &&  circularSum !== 0) {
    return circularSum;
  } else {
    return kadane;
  }
}

const Kadane = arr => {
  // create a local and global max sum variables to hold onto
  let localMax = 0;
  let globalMax = -Infinity;

  // iterate through array
  for(let i = 0; i < arr.length; i += 1) {
    // reassign local max value
    localMax = Math.max(arr[i], arr[i] + localMax);
    // check if local is greater than global, reassign
    if(localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
}

// * test cases!!
console.log(maxSubarraySumCircular([1,-2,3,-2])); // -> 3
console.log(maxSubarraySumCircular([5,-3,5])); // -> 10
console.log(maxSubarraySumCircular([3,-1,2,-1])); // -> 4
console.log(maxSubarraySumCircular([3,-2,2,-3])); // -> 3
console.log(maxSubarraySumCircular([-2,-3,-1])); // -> -1