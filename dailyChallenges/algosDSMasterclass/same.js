// * Put Your Reps In!
// { Frequency Counter Pattern }

// T A S K 1
// Check if two arrays have the same values when squared

// * naive/brute force approach:
// * runtime = quadratic O(N^2)
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

// * second approach: refactored with frequency counter maps
const same2 = (arr1, arr2) => {
  // quick short circuit check:
  if(arr1.length !== arr2.length) {
    return false;
  }

  // create variables to store frequency counters:
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // map out key/value pairs
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // iterate through each frequency map counter
  for(let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// * test case!
console.log(same2([1,2,3,2], [9,1,4,4])); // -> true