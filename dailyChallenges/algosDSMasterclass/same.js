// * Put Your Reps In!
// { Frequency Counter Pattern }

// T A S K 1
// Check if two arrays have the same values when squared

// * naive/brute force approach:
const same1 = (arr1, arr2) => {
  // quick edge case / short circuit check
  if(arr1.length !== arr2.length) {
    return false;
  }

  // loop through both arrays
  for(let i = 0; i < arr1.length; i += 1) {
    let index = arr2.indexOf(arr1[i] ** 2);
      if(index === - 1) {
        // meaning it is not found in the second array
        return false;
      }
    arr2.splice(index, 1);
  }
  return true;
}

// * test case!
console.log(same1([1,2,3,2], [9,1,4,4])); // -> true