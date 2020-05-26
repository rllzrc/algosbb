// ** Day 26 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Contigous Array ! }

// solved previously in April leetcode challenge, attempt again for practice!

// T A S K !!
// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// * first attempt: brute force -- v slow
// time complexity:
// * O(n^2) -> consider every possible subarr by traversing over the complete arr for every start point available 
// space complexity:
// * O(1) -> only two variables
const findMaxLength1 = nums => {
  // create a length variable to keep track of
  let maxLength = 0;
  
  // iterate through nums
  for(let i = 0; i < nums.length; i += 1) {
    // create variables to keep track of how many zeroes and ones there are
    let zero = 0;
    let ones = 0;
    // loop through nums, checking if current element is a 0 or 1
    // consider every possible subArr within given Arr and count out its values 
    for(let k = 0; k < nums.length; k += 1) {
      if(nums[k] === 0) {
        zero += 1;
      } else {
        ones += 1;
      }

      // find out the max size subArr with equal nums of 0s and 1s
      if(zero === ones) {
        maxLength = Math.max(maxLength, k - i + 1);
      }
    }
  }
  return maxLength;
}


// * second attempt: 
const findMaxLength2 = nums => {
  // create a dictionary / cache object variable to store number of frequencies
  const dictionary = {};
  
  // declare count and subarr values
  let count = 0;
  let subArr = 0;

  // loopt through nums
  for(let i = 0; i < nums.length; i += 1) {
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

// * third attempt: using Hash Map DS ~!
const findMaxLength = nums => {
  // declare cache object, count and subArr values to keep track of
  const cache = new Map();
  let count = 0;
  let subArr = 0;

  // iterate through nums
  for(let i = 0; i < nums.length; i += 1) {
    // check if current element is = 0
    if(nums[i] === 0) {
      count -= 1;
    } else {
      count += 1;
    }
    
    // if current value of count = 0, increase size of subArr since we just found equal vals of 0 and 1
    if(count === 0) {
      subArr = Math.max(subArr, i + 1);
    }

    // check if cache has the current count value as a key 
    if(cache.has(count)) {
      // reassign subArr values
      subArr = Math.max(subArr, i - cache.get(count));
    } else {
      // if not, just simply add the value to cache
      cache.set(count, i);
    }
  }

  return subArr;
}

// * test cases!!!
console.log(findMaxLength([0,1])); // -> 2
console.log(findMaxLength([0,1,0])); // -> 2
console.log(findMaxLength([0,1,1])); // -> 2
console.log(findMaxLength([0,0,1])); // -> 2