// * Put Your Reps In! 
// *** Remove Duplicates From Sorted Array

// TASK !!
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// *** HINTS !!
// In this problem, the key point to focus on is the input array being sorted. As far as duplicate elements are concerned, what is their positioning in the array when the given array is sorted? Look at the image above for the answer. If we know the position of one of the elements, do we also know the positioning of all the duplicate elements?

// We need to modify the array in-place and the size of the final array would potentially be smaller than the size of the input array. So, we ought to use a two-pointer approach here. One, that would keep track of the current element in the original array and another one for just the unique elements.

// Essentially, once an element is encountered, you simply need to bypass its duplicates and move on to the next unique element.

// * first pass using SET!

// the easiest/fastest since set only allows unique values, so all dupes will be removed!

const removeDuplicates1 = nums => {

  const uniquesOnly = new Set(nums);
  const backToArray = [...uniquesOnly];
  return backToArray;
}

// * modify array in-place method using two pointer approach:

const removeDuplicates = nums => {
  // declare a temp variable to hold on to previous num
  let temp = 0;
  // loop through the array; starting at the end 
  for(let i = nums.length-1; i >= 0; i -= 1) {
    // create a variable to store current element
    let currElement = nums[i];
    // check to see if currElement is === to the temp variable aka previous num
    if(currElement === temp) {
      // splice out array starting from current index removing that element since its a duplicate
      nums.splice(i, 1);
    }
    // reassign temp to be currElement
    temp = currElement;
  }
  return nums.length;
  // return nums --> if you want the entire updated array instead of just the length
}

// * third approach

const removeDuplicates = nums => {
  let index = 1;

  for(let i = 0; i < nums.length-1; i += 1) {
    if(nums[i] !== nums[i + 1]) {
      nums[index++] = nums[i + 1];
    }
  }
  return index;
}
// * test cases !!

console.log(removeDuplicates([1,1,2])); // --> 2 or [1,2]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // --> 5 or [0,1,2,3,4,5]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // --> 5 or [0,1,2,3,4,5]