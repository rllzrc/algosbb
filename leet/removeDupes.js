// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = function(nums) {

  // create a temp variable to store current element to match with next element
  let temp = 0;

  // create a length variable to store how long the new returned nums arr will be
  let length = 0;

  // iterate through the array
  for(let i = 0; i < nums.length; i += 1) {
    temp = nums[i + 1]
    //console.log('this is temp:', temp);
    if(temp === nums[i]) {
      console.log('temp in the if:', temp);
      console.log('its a duplicate!', nums[i]);
      console.log('this is index:', i);
      nums.splice(nums[i], 1);
      console.log('nums after splice:', nums);
    }
  }
    
};

// * test cases!

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
//console.log(removeDuplicates([1,1,2]));