// ** Leetcode: Arrays Reps Challenge  ~ Medium Edition ~
// ** --> { #1423 - Maximum Points You Can Obtain From Cards }

// T A SK !!!

// There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

// In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

// Your score is the sum of the points of the cards you have taken.

// Given the integer array cardPoints and the integer k, return the maximum score you can obtain.

// * main squeeze:
// since you can only take from the beginning or end, focus on one side first then take away from inner most to switch to the other side vice versa
// ~~ constraints: 
// 1 <= cardPoints.length <= 10^5
// 1 <= cardPoints[i] <= 10^4
// 1 <= k <= cardPoints.length

// * first attempt ~
// * time complexity: -- time limit exceeded --
// * space complexity: -- ugh revamping to version ii --
const maxScore = (cardPoints, k) => {
  // declare pointer variables
  let maxScoreForReal = 0;
  let i = 0;
  // loop through and calculate sum of left side
  while(i < k) {
    maxScoreSoFar += cardPoints[i];
  }

  // swap values backwards by 1 slot, update max for real value as you go
  let buffer = 1; 
  let maxSoFar = maxScoreForReal;
  while(buffer <= k) {
    maxSoFar = maxSoFar - cardPoints[k - buffer] + cardPoints[cardPoints.length - buffer];
    // find the max value
    maxScoreForReal = Math.max(maxScoreForReal, maxSoFar);
    // increment buffer as you go
    buffer += 1; 
  }
  return maxScoreForReal; 
};

// second attempt:
// add first three elements starting from left side
// max subarray challenge and use sliding window
// * this is just subarray max sum minus the constraints per the prompt
const maxScore2 = (cardPoints, k) => {
  // declare max and temp variables to compare as we track the subarray sums
  let max = 0;
  let temp = 0;
  // initial loop through from 0 to k adding every element to the temp
  for(let i = 0; i < k; i += 1) {
    temp += cardPoints[i];
  }

  temp = max;
  // loop again through the array starting from k so we are within bounds 
  // temp is updated by sliding window effect -- subtract previous element of subarray and add a new element
  for(let i = k; i < cardPoints.length; i += 1) {
    temp = temp - cardPoints[i - k] + cardPoints[i];
    // compare between the two, return max out
    max = Math.max(temp, max);
  }
  return max; 
}

// * third attempt:
const maxScore3 = (cardPoints, k) => {
  // initialize pointer variables
  let length = cardPoints.length;
  let left = new Array(k + 1).fill(0);
  let right = new Array(k + 1).fill(0);

  for(let i = 0; i < k; i += 1) {
    left[i + 1] = cardPoints[i] + left[i];
    right[i + 1] = cardPoints[length - i - 1] + right[i];
  }

  let max = 0;

  for(let i = 0; i <= k; i += 1) {
    let current = left[i] + right[k - 1];
    max = Math.max(max, current);
  }

  return max; 
};

// * fourth attempt (lulz)
const maxScore4 = (cardPoints, k) => {
  const length = cardPoints.length;
  const minLength = length - k;
  let sum = 0;

  for(let i = 0; i < minLength; i += 1) {
    sum += cardPoints[i];
  }

  let minSum = sum;
  let i = 0;
  let j = minLength - 1;

  while(++j < length) {
    sum -= cardPoints[i++];
    sum += cardPoints[j];
    minSum = Math.min(sum, minSum);
  }
  const total = cardPoints.reduce((acc, curr) => acc + curr, 0);
  return total - minSum;
};

// * keep trying lulz
const maxScore5 = (cardPoints, k) => {
  let sum = 0;
  // iterate through first K cards 
  for(let i = 0; i < k; i += 1) {
    // to find intial amount of sum 
    sum += cardPoints[i];
  }
  // to keep track of best possible result at each iteration
  let max = sum;
  // initial reverse window => i = k to j = cardPoints.length - 1
  // at each iteration, slide window backwards
  // remove one card from left, add one card from right
  for(let i = k - 1, j = cardPoints.length - 1; i >= 0; i -=1, j -= 1) {
    sum += cardPoints[j] - cardPoints[i];
    max = Math.max(max, sum);
  }
  return max;
};

// * test cases ~
console.log(maxScore([1,2,3,4,5,6,1], k = 3)); // 12
console.log(maxScore([9,7,7,9,7,7,9], k = 7)); // 55
console.log(maxScore([2,2,2], k = 2)); // 4