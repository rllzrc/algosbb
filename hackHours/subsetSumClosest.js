// You are given an array of integers and a target number. Write a function that
// returns the smallest absolute difference of the closest subset sum to the
// target. A subset can be any size and the elements do not have to appear
// consecutively in the array.
// ​
// Positive, negative, and zero allowed. Some numbers may be duplicated.
// ​
// subsetSumClosest([3, 7, 8, 2], 5) -> 0
// Because 3 + 2 -> 5 exactly, the difference between the closest sum and the target
// is 5 - 5 = 0.
// ​
// subsetSumClosest([3, 7, 8, 2], 6) -> 1
// The closest subset sum to 6 is either 7 -> 7, or 3 + 2 -> 5. Either of these has
// an absolute difference from the target of 1.
// ​
// subsetSumClosest([1, -3, 2], 5) -> 2
// The closest subset sum to 5 is 1 + 2 -> 3, which has an absolute difference
// from the target of 2.
// ​
// subsetSumClosest([], 6) -> 6
// An empty array "sums" to 0, which has an absolute difference from the target 6
// of 6.
// ​
// */
​
//* My thought process was that I knew I would need a variable to keep track of the minDifference
//* But I would also need a variable to track the current amount of the two added numbers in the arr
//* Since I knew I had to check each number against the rest of the numbers in the array
//* I knew I would need nested for loops
//* Once I got into my nested loop i.e. array[j]
//* I needed to check the difference btwn the target value and the current sum as currentDistance
//* Because we need to account for negative numbers, I knew I needed to check the absolute value
//* Lastly, I would check for the smaller value, the currentDistance or the current minDifference
//* Whichever one was smaller was the value I was looking to return
​
​
// const subsetSumClosest = (nums, target) => {
//   if (nums.length === 0) return target;
//   let minDifference = Infinity;
//   let sum = 0;
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       sum = nums[i] + nums[j];
//       const currentDistance = Math.abs(target - sum);
//       if (currentDistance < minDifference) {
//         minDifference = currentDistance;
//       }
//     }
//   }
//   return minDifference;
// };
​
​
//* The other approach is the recursive approach
//* We have two possibilities for each array integer => either use the current value or don't use it
//* We have to check both possibilities for each index value inside of the recursive function
//* We'll have to return the minDifference once it is calculated to check against the current minDifference and the target
//* Once the recursive function is complete, we'll have calculated our minDifference
​
​
const subsetSumClosest = (nums, target) => {
  let minDifference = Infinity;
​
  const calculateDifference = (target, index) => {
    if (index === nums.length) {
      minDifference = Math.min(minDifference, Math.abs(target));
      return;
    }
    calculateDifference(target - nums[index], index + 1);
    calculateDifference(target, index + 1);
  };
​
  calculateDifference(target, 0);
  return minDifference;
};
​
console.log(subsetSumClosest([3, 7, 8, 2], 5)); // => 0
console.log(subsetSumClosest([3, 7, 8, 2], 6)); // => 1
console.log(subsetSumClosest([1, -3, 2], 5)); // => 2
console.log(subsetSumClosest([], 6)); // => 6
​
/*
​
Extension:
​
Given a set of candidate numbers (nums) (without duplicates) and a target
number (target), find all unique combinations in candidates where the candidate
numbers exactly sum to target.
​
The candidate numbers will always be presented in ascending order.
​
The same repeated number may be chosen from candidates unlimited number of times.
​
Note:
​
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
The solution set may be returned in any order.
​
Input: nums = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
​
Input: nums = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
​
Input: nums = [3, 4, 7, 8, 11], target = 5,
A solution set is:
[
]
​
*/
​
//* First step is to create your two arrays, your combinations array
//* and your current values that you're checking.
//* We know at the end, we'll be returning out the combinations array.
//* Now the processSubset function is going to take in your target value and your index value
//* The goal here is to go through your array,
//* check to see if your current index position value fits within the target
//* if it does, add it to your current array, and then subtract that value from your target value
//* if it does not ( which is the second if condition ) => return out of the function to then pop off the current value
//* if you got through the array with your target hitting 0,
//* then I also want to return because that means that all of the values inside of the current array are a match with the target value
​
//* This process continues until we try each array index position with the rest of the elements
//* The reason why we are popping inside of the array and then checking the followng index position inside is because we need to also check each number individually
//* For the first example, 7 by itself works too!
​
const generateCombinations = (nums, target) => {
  const combinations = [];
  const current = [];
​
  const processSubset = (target, index) => {
    if (target === 0) {
      combinations.push(current.slice());
      return;
    }
    if (nums[index] > target || index === nums.length) return;
​
    current.push(nums[index]);
    processSubset(target - nums[index], index);
    current.pop();
    processSubset(target, index + 1);
  };
​
  processSubset(target, 0);
​
  return combinations;
};
​
console.log(generateCombinations([2, 3, 6, 7], 7));
console.log(generateCombinations([2, 3, 5], 8));
console.log(generateCombinations([3, 4, 7, 8, 11], 5));
​
