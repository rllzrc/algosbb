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

// * test cases ~
console.log(maxScore([1,2,3,4,5,6,1], k = 3)); // 12
console.log(maxScore([9,7,7,9,7,7,9], k = 7)); // 55
console.log(maxScore([2,2,2], k = 2)); // 4