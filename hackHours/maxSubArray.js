/*
You are given an array of integers with both positive and negative numbers.
A valid subarray is any slice of consecutive elements from the array.
(
  e.g. the following are valid subarrays of [1, 2, 3, 4, 5]
  [1, 2, 3]
  [2, 3, 4]
  [3]
  [1, 2, 3, 4, 5]
)
Find the subarray with the largest sum from the input array.
​
e.g.
input = [1, -2, 3, 10, -4, 7, 2, -5]
maxSubarray(input);
--> returns 18 from subarray [3, 10, -4, 7, 2]
​
input2 = [15, 20, -5, 10]
maxSubarray(input2);
--> returns 40 from subarray [15, 20, -5, 10]
*/
​
const maxSubarrayBruteForce = (arr) => {
  // initialize maxSum at -Infinity
  let maxSum = -Infinity;
  // iterate over array
  arr.forEach((element, index) => {
    // initialize localMax at value of current element
    let localMax = element;
    // initialize currentSum at value of current element
    let currentSum = element;
    // iterate over remaining elements in array
    for (let i = index + 1; i < arr.length; i++) {
      // add current element to currentSum
      currentSum += arr[i];
      // if currentSum is greater than localMax
      // update localMax to currentSum's value
      if (currentSum > localMax) {
        localMax = currentSum;
      }
    }
    // if currentSum is greater than maxSum, assign maxSum to currentSum's value
    if (localMax > maxSum) maxSum = localMax;
  });
​
  // return maxSum
  return maxSum;
};
​
// helper function to check if max sum crosses midpoint
const maxCrossingSum = (arr, startIndex, midpoint, endIndex) => {
  let sum = 0;
  let leftSum = -Infinity;
​
  // calculate max sum left of midpoint
  for (let i = midpoint; i >= startIndex; i--) {
    sum += arr[i];
    if (sum > leftSum) leftSum = sum;
  }
​
  sum = 0;
  let rightSum = -Infinity;
  // calculate max sum right of midpoint
  for (let j = midpoint + 1; j <= endIndex; j++) {
    sum += arr[j];
    if (sum > rightSum) rightSum = sum;
  }
​
  return leftSum + rightSum;
};
​
// quasilinear time: O(n log n), linear space: O(n)
const maxSubarrayDivideAndConquer = (arr, startIndex = 0, endIndex = arr.length - 1) => {
  // base case: only one element left in array
  if (startIndex === endIndex) return arr[startIndex];
​
  // find midpoint
  const midpoint = Math.floor((startIndex + endIndex) / 2);
​
  // return max of left half, right half, and midpoint-crossing solution
  return Math.max(
    maxSubarrayDivideAndConquer(arr, startIndex, midpoint),
    maxSubarrayDivideAndConquer(arr, midpoint + 1, endIndex),
    maxCrossingSum(arr, startIndex, midpoint, endIndex),
  );
};
​
// const array1 = [1, 2, -5, 4];
// const array2 = [1, -2, 3, 10, -4, 7, 2, -5];
​
// console.log(maxSubarrayBruteForce(array1)); // 4
// console.log(maxSubarrayBruteForce(array2)); // 18
// console.log(maxSubarray(array1));
// console.log(maxSubarray(array2));
// console.log(maxCrossingSum(array2, 4, 5, 7));
// console.log(maxCrossingSum(array1, 0, 1, 3))
// console.log(maxSubarrayDivideAndConquer(array2.slice(4)));
// console.log(maxSubarrayDivideAndConquer(array1));
​
/*
Extension: solve in linear time and constant space
Hint: Kadane's Algorithm
*/
​
const kadanesMaxSubarray = (arr) => {
  // initialize localMax and globalMax to first element in array
  let localMax = arr[0];
  let globalMax = arr[0];
​
  // iterate over array, defining localMax for each element
  // and updating globalMax if current localMax > globalMax
  for (let i = 1; i < arr.length; i++) {
    // localMax is greater value of previous localMax + current el and current el
    localMax = Math.max(localMax + arr[i], arr[i]);
​
    // globalMax is greater value of globalMax and localMax
    globalMax = Math.max(globalMax, localMax);
  }
​
  return globalMax;
};
​
