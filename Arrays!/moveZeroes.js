// * Put Your Reps In !! --> Move Zeroes!

// TASK !!

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// * Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// * first attempt:
// space complexity:
// * O(n) since creating retainOrder array
// runtime complexity:
// * O(n) --> Linear however, the total numnber of operations are sub-optimal
const moveZeroes1 = nums => {
  // create a variable to store the length of nums
  const length = nums.length;

  // create a variable to store the number of zeroes found
  let numZeroes = 0;
  // loop through the nums array
  for(let i = 0; i < length; i += 1) {
    // check if current element is 0, if so increment numZeroes variable
    if(nums[i] === 0) {
      numZeroes += 1;
    }
  }
  
  //console.log(numZeroes);

  // loop through nums again and make sure the non-zero elements retain their original order by setting up another array
  let retainOrder = [];
  for(let i = 0; i < length; i += 1) {
    if(nums[i] !== 0) {
      // if current element is not zero, push it into the retainOrder array
      retainOrder.push(nums[i]);
    }
  }

  // coolio now move all the zeroes you found to the end of the new retainOrder array
  while(numZeroes--) {
    retainOrder.push(0);
  }

  // combine retainOrder and return out original array
  for(let i = 0; i < length; i += 1) {
    nums[i] = retainOrder[i];
  }

  //console.log(retainOrder);
  //console.log(nums);
  return nums;
}

// * second attempt! --> two pointer approach
// space complexity:
// * O(1) constant 
// runtime complexity:
// * O(n) linear ; number of operations are still sub-optimal, but a bit better than the first pass ^^
const moveZeroes = nums => {
  // create a var to store length of nums
  const length = nums.length;
  // create a var to store the index of where the lastNonZeroEl was found aka the slow pointer
  let lastNonZeroIndex = 0;

  // if current element is not a 0, we need to append it just in front of the last non 0 element we found
  for(let i = 0; i < length; i += 1) {
    if(nums[i] !== 0) {
      console.log('this is the index to put the non zero elements in', nums[lastNonZeroIndex]);
      console.log('current el', nums[i]);
      nums[lastNonZeroIndex] = nums[i];
      lastNonZeroIndex += 1;
    }
  }
  
  // console.log(lastNonZeroIndex);
  // console.log(nums)

  // once all elements have been processed, all the non zero elements are already at the beginning of the array
  // just need to fill remaining array with 0's
  for(let i = lastNonZeroIndex; i < length; i += 1) {
    // starting from the last non zero index found above, populate the rest of the arr slots with zero 
    nums[i] = 0;
  }
  return nums;
}

// * test cases!!
console.log(moveZeroes([0,1,0,3,12])); // -> [1,3,12,0,0]
