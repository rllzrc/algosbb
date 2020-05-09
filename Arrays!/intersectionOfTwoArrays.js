// * Put Your Reps In !! --> Intersection Of Two Arrays Part ii

// TASK !!

//Given two arrays, write a function to compute their intersection.

// * first attempt:
// use reduce! ~
const intersect1 = (nums1, nums2) => {
  return nums2.reduce((acc, currVal) => {
    if(nums1.includes(currVal)) {
      acc.push(currVal);
      nums1.splice(nums1.indexOf(currVal), 1)
    }
    return acc;
  }, [])
};

// * second attempt:
// iterative solution
const intersect = (nums1, nums2) => {
  // create a new output array to return out
  let result = [];

  // loop through both nums arrays
  // outer is for num1, inner num2
  for(let i = 0; i < nums1.length; i += 1) {
    for(let k = 0; k < nums2.length; k += 1) {
      // this will check if the current element in nums2 is also in nums1, if so, push that element to our results array
      // add a break so it doesn't repeat 
      if(nums2.includes(nums1[i])) {
        result.push(nums1[i]);
        break;
      }
    }
  }
  return result
}

// * test cases:
console.log(intersect([1,2,2,1], [2,2])); // -> [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // -> [4,9]