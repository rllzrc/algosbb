// ** Day 26 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Contigous Array ! }

// solved previously in April leetcode challenge, attempt again for practice!

// T A S K !!
// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// * first attempt: 
const findMaxLength = nums => {
  // create a dictionary / cache object variable to store number of frequencies
  const dictionary = {};
  
  // declare count and subarr values
  let count = 0;
  let subArr = 0;

  // loopt through nums
  for(let i = 0; i <= nums.length; i += 1) {
    // check if current element is equal to 1
    if(nums[i] === 1) {
      count += 1;
    } else {
      count -= 1;
    }

    // if count = 0; increase the value of the subArr by curr index + 1
    if(count === 0) {
      subArr = i + 1;
    }

    // if current count value is already found in the dictionary, update the subArr value
    if(!dictionary[count]) {
      dictionary[count] = i;
    } else {
      subArr = Math.max(subArr, i - dictionary[count]);
    }
    console.log('count:', count)
    console.log('subArr:', subArr)
  }

  return subArr;
}

// * test cases!!!
console.log(findMaxLength([0,1])); // -> 2
console.log(findMaxLength([0,1,0])); // -> 2
console.log(findMaxLength([0,1,1])); // -> 2