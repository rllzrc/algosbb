// * Put Your Reps In!
// * { Problem Solving Patterns Challenges! }

// * T A S K #1
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// MUST have O(N) complexity!

// * first attempt:
// time complexity:
// * Linear -- O(N)
const sameFrequency = (num1, num2) => {
  // quick edge case check 
  if(!num1 || !num2 || num1.length !== num2.length) return false;
  // convert num to string
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  // create hash map object to store num frequency count
  const cache1 = {};
  const cache2 = {};
  // map out key/val pairs into cache 
  for(let char of strNum1) {
    cache1[char] = (cache1[char] || 0) + 1;
  }
  for(let char of strNum2) {
    cache2[char] = (cache2[char] || 0) + 1;
  }
  // iterate through first cache frequency counter
  for(let key in cache1) {
    // do the values correspond?
    if(cache2[key] !== cache1[key]) {
      return false;
    }
  }
  return true;
}

// * test cases!!
// console.log(sameFrequency(182, 281)); // -> true
// console.log(sameFrequency(34, 14)); // -> false
// console.log(sameFrequency(3589578, 5879385)); // -> true
// console.log(sameFrequency(22, 222)); // -> false

// *** T A S K # 2 ~~
// Implement a function called areThereDuplicates which accepts a variable number of args and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// * first attempt: use frequency counter 
function areThereDuplicates1 () {
  // create a cache to store frequency counts
  const cache = {};
  // iterate through values in arguments
  for(let val in arguments) {
    // map out key/val pairs
    cache[arguments[val]] = (cache[arguments[val]] || 0) + 1;
  }
  //console.log(cache);
  // check cache
  for(let key in cache) {
    if(cache[key] > 1) return true;
  }
  // else
  return false;
};

// * second attempt: multiple pointers
const areThereDuplicates2 = (...args) => {
  // sort out the args arr
  args.sort((a, b) => a > b);
  // create pointer variables
  let left = 0;
  let right = 1;
  // iterate through while right is less than the length of args
  while(right < args.length) {
    // check if args at left is equal to right
    if(args[left] === args[right]) {
      return true;
    }
    // increment both values to move on the the next element
    left += 1;
    right += 1;
  }
  return false;
};

// * third attempt: one liner using set
function areThereDuplicates3 () {
  return new Set(arguments).size !== arguments.length;
}

// * test cases!!
// console.log(areThereDuplicates(1,2,3)); // -> false
// console.log(areThereDuplicates(1,2,2)); // -> true
// console.log(areThereDuplicates('a','b','c','a')); // -> true

// *** T A S K # 3 !!! ~~
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matvhes the average target.

// * first attempt:
// time complexity:
// * Linear -> O(N)
// space complexity:
// * Constant -> O(1)

const averagePair = (nums, target) => {
  // quick edge case check
  if(!nums || nums.length === 0 || !target) return false;
  // create pointer variables
  let left = 0;
  let right = nums.length - 1;
  // iterate while left is smaller than right
  while(left < right) {
    // create a variable avg to store current iterations avg
    let avg = (nums[left] + nums[right]) / 2;
    // check if avg equals target
    if(avg === target) {
      return true;
    } else if(avg > target) {
      // decrement right 
      right -= 1;
    } else {
      // move closer to end, add + 1 to left
      left += 1;
    }
  }
  return false;
};

// * test cases!!
// console.log(averagePair([1,2,3], 2.5)); // -> true
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)); // -> true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)); // -> false
// console.log(averagePair([], 4)); // -> false

// ---------

// *** T A S K # 4 !!! ~~
// Write a function called isSubs which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 

// * first attempt: iterative
// time complexity:
// * O(N + M)
// space complexity:
// * Constant -> O(1)
const isSubsequence1 = (str1, str2) => {
  // quick edge case check
  if(!str1 || str1.length === 0 || !str2 || str2.length === 0) return false;
  // create pointer variables
  let i = 0;
  let k = 0;
  while(k < str2.length) {
    // check if chars are the same
    if(str2[k] === str1[i]) {
      // increment i value
      i += 1;
    }
    // if i is equal to the length of str1
    // no need to keep checking since we are at the end
    if(i === str1.length) return true;
    // increment k value to continue loop with next character in str2
    k += 1;
  }
  return false;
};

// * second attempt: recursive solution 
// not O(1) space though...
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
};

// * test cases!!
// console.log(isSubsequence('hello', 'hello world')); // -> true
// console.log(isSubsequence('sing', 'sting')); // -> true
// console.log(isSubsequence('abc', 'abracadabra')); // -> true
// console.log(isSubsequence('abc', 'acb')); // -> false (order matters)

// --------- sliding window approach

// *** T A S K # 5 !!! ~~
// Given an array of integers and a number, write a function which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the example below, [100,200,300] is a subarray of the original array but [100,300] is not. 

// * first attempt: 
// time complexity:
// * Linear - O(N)
// space complexity:
// * Constant - O(1)

const maxSubarraySum = (nums, target) => {
  // quick edge case check
  if(nums.length < target || target > nums.length) return null;
  // create a maxsum and temp variable to keep track of
  let max = 0;
  let temp = 0;
  // iterate through nums
  // add up the values of all elements up until target
  // save the value to max
  for(let i = 0; i < target; i += 1) {
    max += nums[i];
  }
  // reassign temp value 
  temp = max;
  // iterate through the nums array starting at nums value since we just added it above 
  // to establish sliding window pattern
  for(let i = target; i < nums.length; i += 1) {
    // subtract previous element, add next to window
    temp = temp - nums[i - target] + nums[i];
    // take max value between variables
    max = Math.max(max, temp);
  }
  return max;
};

// * test cases!
// console.log(maxSubarraySum([100,200,300,400], 2)); // -> 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)); // -> 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // -> 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); // -> 5
// console.log(maxSubarraySum([2,3], 3)); // -> null

// --------- sliding window approach

// *** T A S K # 6 !!! ~~
// Write a function which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contigous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// * first attempt: 
// time complexity:
// * Linear - O(N)
// space complexity:
// * Constant - O(1)
const minSubArrayLen = (arr, target) => {
  // create pointer variables
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  // iterate while start is less than nums 
  while(start < arr.length) {
    // if current window doesnt add up to given target, move to the right
    if(total < target && end < arr.length) {
      // slide window to the right
      total += arr[end];
      end += 1;
    } else if(total >= target) {
      // if current window adds up to at least the target, shrink the window
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start += 1;
    } else {
      // currently if the total is less than target but we've reached the end
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// * test cases:
// console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // -> 2 [4,3] smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4], 9)); // -> 2 [5,4] smallest subarray
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // -> 1 [62] greater than 52
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); // -> 3
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)); // -> 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // -> 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)); // -> 0

// --------- sliding window approach continued..

// *** T A S K # 7 !!! ~~
// Write a function which accepts a string and returns the length of the longest substring with all distinct characters.

// * first attempt: 
// time complexity:
// * Linear - O(N)

const findLongestSubstring = str => {
  // quick edge case check
  if(str === '' || !str || str.length === 0) return 0;
  // create pointer variables
  let start = 0;
  const cache = {};
  let longest = 0;
  // iterate through chars in the string
  for(let i = 0; i < str.length; i += 1) {
    // create a variable to store current character
    let char = str[i];
    // check if current char is found in cache
    if(cache[char]) {
      // reassign start value to be max betweem start and char's index
      start = Math.max(start, cache[char]);
    }
    // create index beginning of substring + 1 to include current 
    longest = Math.max(longest, i - start + 1);
    // store index of next char to not double the count
    cache[char] = i + 1;
  }
  console.log(cache);
  return longest;
};

// * test cases !!
console.log(findLongestSubstring('')); // -> 0
console.log(findLongestSubstring('rithmschool')); // -> 7
console.log(findLongestSubstring('thisisawesome')); // -> 6
console.log(findLongestSubstring('thecatinthehat')); // -> 7
console.log(findLongestSubstring('bbbb')); // -> 1
console.log(findLongestSubstring('longestsubstring')); // -> 8
console.log(findLongestSubstring('thisishowwedoit')); // -> 6