// * My Slice
// TASK !!
// Define a function, mySlice, that accepts up to three arguments:
// originalArray
// startIdx (number, optional)
// endIdx (number, optional)
// mySlice should return a copy of the original array. The copy should include all of the elements from the orignal array, starting at and including the startIdx, up through and excluding the endIdx.

const mySlice = (origArr, startIndex, endIndex) => {
  // declare a variable to store new result arr in
  let result = [];

  // check if startIndex is undefined, start at the beginning of the arr
  if(startIndex === undefined) {
    startIndex = 0; 
  } else if(startIndex < 0) { //--> if startIndex is a negative number, get the correct start position at the back of arr
    startIndex = origArr.length + startIndex;
  }
  
  if (endIndex === undefined) { // --> if endIndex is not given, set it the the length or end of the array
    endIndex = origArr.length; 
  } else if (endIndex < 0) {
    endIndex = origArr.length + endIndex;
  }

  // loop through arr
  for(let i = startIndex; i < endIndex; i += 1) {
    result.push(origArr[i]);
  }
  return result;
}

// * test cases!!
console.log(mySlice([1, 2, 3], 1, 2)); // => [2]
// If the endIdx is undefined, include all the indices starting at and including the startIdx through the end of the original array.
console.log(mySlice([1, 2, 3], 1)); // => [2, 3] 
// If the startIdx is undefined, return a copy of the original array.
console.log(mySlice([1, 2, 3])); // => [1, 2, 3]
// startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array.
console.log(mySlice([1, 2, 3], -1)); // => [3]

