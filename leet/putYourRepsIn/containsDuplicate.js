// * Put Your Reps In!! --> Contains Duplicate

// T A S K ~
// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// * first pass 
const containsDuplicate = nums => {
  // ES6 Set
  const hasDupes = nums => {
    return new Set(nums).size !== nums.length;
  }

  if(hasDupes(nums)) {
    return true;
  } 
  return false;
}


// * test cases!!
console.log(containsDuplicate([1,2,3,1])); // --> true
console.log(containsDuplicate([1,2,3,4])); // --> false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // --> true
