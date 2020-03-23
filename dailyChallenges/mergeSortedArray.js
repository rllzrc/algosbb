// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// * example parameters
// input: [1,2,3] [4,5,6]
// output: [1,2,3,4,5,6]
// input: [1,3,5] [2,4,6]
// output: [1,2,3,4,5,6]

// * brute force approach, will not account for decimals/floats or duplicates
const mergeSortedArray1 = (arr1, arr2) => {
  
  // create a variable to store result arr in
  // merge two input arrays together and then sort them out
  // use spread syntax to merge together for a shorter alternative than object.assign()
  let mergedArr = [...arr1, ...arr2];

  // yay! that means they should all be together in the mergedArr, go ahead and sort it to ensure that nums are in order
  mergedArr = mergedArr.sort((a,b) => a-b);
  //console.log(mergedArr);

  return mergedArr;
}

const mergeSortedArray = (arr1, arr2) => {
   // check to make sure args passed are whole integers with parseInt()
  // and find a way to remove duplicates
  
  // creat a var to store mergedArr in, merge two input arrays together via spread/destructuring ?
  let mergedArr = [...arr1, ...arr2];

  // use filter && indexOf to remove dupes!
  mergedArr = mergedArr.filter((e, i) => mergedArr.indexOf(e) === i);
  
  // then use math.round to convert all floats/decimals to a whole integer
  for(let i = 0; i < mergedArr.length; i += 1) {
    if(mergedArr[i] % 1 !== 0) {
      mergedArr[i] = Math.round(mergedArr[i]);
    }
  }

  return mergedArr.sort((a,b) => a-b);
}



// console.log(mergeSortedArray([1,2,3], [4,5,6]));
// console.log(mergeSortedArray([1,3,5], [2,4,6]));
// console.log(mergeSortedArray([6,7,1], [2,4,3]));
console.log(mergeSortedArray([6,7,1], [2,4,3,5.2]));
console.log(mergeSortedArray([6,7,7,1], [2,4,3, 5.2, 8, 8]));


