// *** Put Your Reps In! -->  Rotate Array

// TASK !!!
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// *** Example:
// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// *** HINTS !!!
// The easiest solution would use additional memory and that is perfectly fine.

// The actual trick comes when trying to solve this problem without using any additional memory. This means you need to use the original array somehow to move the elements around. Now, we can place each element in its original location and shift all the elements around it to adjust as that would be too costly and most likely will time out on larger input arrays.

// One line of thought is based on reversing the array (or parts of it) to obtain the desired result. Think about how reversal might potentially help us out by using an example.

// The other line of thought is a tad bit complicated but essentially it builds on the idea of placing each element in its original position while keeping track of the element originally in that position. Basically, at every step, we place an element in its rightful position and keep track of the element already there or the one being overwritten in an additional variable. We can't do this in one linear pass and the idea here is based on cyclic-dependencies between elements.

const rotate = (nums, k) => {
  return nums.unshift(...nums.splice(nums.length-k));
}

// * test cases!!
console.log(rotate([1,2,3,4,5,6,7], 3)); // --> [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)); // --> [3,99,-1,-100]
