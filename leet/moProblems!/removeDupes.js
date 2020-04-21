// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates1 = nums => {
  
  // create a temp variable to hold onto the previous num
  let temp = 0;

  // iterate through the array
  // start at the end of the array, length-1 since counts off at 0 for index values
  // condition: as long as i >= 0
  // decrement instead of increase since you want to go down to the beginning
  for(let i = nums.length-1; i >= 0; i -= 1) {

    // create another var to store the current element
    // then compare it to temp
    let currElement = nums[i]
    //console.log('this is current element:', currElement);

    // check to see if currElement is equal to the temp variable aka previous number
    //console.log('this is previous element:', temp);
    if(currElement === temp) {
      nums.splice(i, 1);
    }
    temp = currElement;
    
  }

  //console.log('arr after splice:', nums);
  return nums.length;
}

// * second approach w count variable 
const removeDuplicates2 = nums => {

  // * edge case if empty nums array
  if(nums.length === 0) return 0;

  if(nums.length === 1) return 1;

  let count = 0;
  for(let i = 0; i < nums.length; i += 1) {
    if(nums[i] !== nums[i +1]) {
      count++;
    }
  }
  return count;
}

// * two pointer approach

const removeDuplicates = nums => {
  let index = 1;

  for(let i = 0; i < nums.length-1; i += 1) {
    if(nums[i] !== nums[i + 1]) {
      nums[index++] = nums[i + 1];
    }
  }
  return index;
}

// * test cases!

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // --> 5
console.log(removeDuplicates([1,1,2])); // --> 2
