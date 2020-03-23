// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// * example parameters
// input: [1,2,3] [4,5,6]
// output: [1,2,3,4,5,6]
// input: [1,3,5] [2,4,6]
// output: [1,2,3,4,5,6]

const mergeSortedArray = (arr1, arr2) => {
  
  // check to make sure args passed are whole integers with parseInt()

  // create a variable to store result arr in
  // merge two input arrays together and then sort them out
  // use spread syntax to merge together for a shorter alternative than object.assign()
  let mergedArr = [...arr1, ...arr2];
  //console.log(mergedArr);
  
  // yay! that means they should all be together in the mergedArr, go ahead and sort it to ensure that nums are in order
  mergedArr = mergedArr.sort((a,b) => a-b);
  //console.log(mergedArr);

  return mergedArr;
}

console.log(mergeSortedArray([1,2,3], [4,5,6]));
console.log(mergeSortedArray([1,3,5], [2,4,6]));
console.log(mergeSortedArray([6,7,1], [2,4,3]));