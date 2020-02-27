// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = nums => {
  
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
    console.log('this is current element:', currElement);

    // check to see if currElement is equal to the temp variable aka previous number
    console.log('this is previous element:', temp);
    if(currElement === temp) {
      nums.splice(i, 1);
    }
    temp = currElement;
    
  }

  console.log('arr after splice:', nums);
  return nums.length;
}


// brute force approach

// const removeDuplicates = function(nums) {

//   // create a temp variable to store current element to match with next element
//   let temp = 0;

//   // create a dupes variable to store how many times the same num shows up
//   let dupes = 0;

//   console.log(nums.length);
//   // iterate through the array
//   for(let i = 0; i < nums.length; i += 1) {
//     temp = nums[i + 1]
//     //console.log('this is temp:', temp);
//     if(temp === nums[i]) {
      
//       console.log('temp in the if:', temp);
      
//       console.log('nums[i]/current element', nums[i]);
//       console.log('this is index:', i);
//       console.log('nums b4 splice:', nums);
//       //nums.splice(i, 1);
//       console.log('nums after splice:', nums);
//       // temp =  nums[i + 1];
//       dupes += 1;
//       nums.splice(i, dupes);
//     }

//     dupes = 0;
//     console.log('temp after if:', temp);

//   }
//   //console.log('after splice length:', nums.length);
//   console.log('this is dupes:', dupes);
// };


// * additional notes/java solution:

// public int removeDuplicates(int[] nums) {
//   if (nums.length == 0) return 0;
//   int i = 0;
//   for (int j = 1; j < nums.length; j++) {
//       if (nums[j] != nums[i]) {
//           i++;
//           nums[i] = nums[j];
//       }
//   }
//   return i + 1;
// }

// * test cases!

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));