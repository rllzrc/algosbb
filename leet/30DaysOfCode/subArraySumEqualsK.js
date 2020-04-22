// * Day 21 of 30 Days of Code --> Subarray Sum Equals K

// TASK !!!
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// *** Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// *** HINTS !!!
// Can we optimize it by using some extra space?

// What about storing sum frequencies in a hash table? Will it be useful?

// sum(i,j)=sum(0,j)-sum(0,i), where sum(i,j) represents the sum of all the elements from index i to j-1. Can we use this property to optimize it.

// consider every possible subarray of nums arr --> find the sum of the element of each of those subarrays and check for the equaltiy of then sum obtained with the given k value
  // whenever sum === k; we can increment count used to store the req result

// * first pass --> brute force iteratively
// loops on loops!
// runtime complexity:
// * O(n3) --> every possible subarray takes O(n2) time; for each subarray we calculate the sum taking O(n) time in the worst case
// space complexity:
// * O(1) --> constant space is used

const subArraySum = (nums, k) => {
  // initialize count variable to store result in
  let count = 0;

  // loop through nums array
  for(let start = 0; start < nums.length; start += 1) {
    // loop again starting at the first element
    for(let end = start + 1; end <= nums.length; end += 1) {
      // initialize sum variable
      console.log(`in the second loop why`);
      let sum = 0;
      // loop yet again 
      for(let i = start; i < end; i += 1) {
        console.log(`in the third loop whyyy`);
        sum += nums[i];
        if(sum === k) {
          count += 1;
        }
      }
    }
    return count;
  }
}

// * test cases!!!
console.log(subArraySum([1,1,1], 2)); // --> 2