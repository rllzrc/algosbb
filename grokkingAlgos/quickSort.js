// * Chapter 4 Practice:  Quicksort

// divide and conquer approach / euclid's alogrithm introduction

// **** Exercises: 

// 1. Write out the code for the sum function using loops
const sumLoop = arr => {
  let total = 0;
  for(let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }
  return total;
}

console.log(sumLoop([1, 2, 3, 4])); // --> 10

// sum using reduce
const sumReduce = arr => arr.reduce((curr, prev) => curr + prev);

console.log(sumReduce([1, 2, 3, 4])); // 10

//------------------

// 2. Write a recursive function to count the number of items in a list.
const sumRecursive = arr => {
  if(arr.length === 0) return 0;
  
  return arr[0] + sumRecursive(arr.slice(1));
}
console.log(sumRecursive([1, 2, 3, 4])); // 10


//------------------

// 3. Find the max number in a list
const maxNum = list => {
  if(list.length === 0) return 0;

  return 1 + maxNum(list.slice(1));
}

console.log(maxNum([0, 1, 2, 3, 4, 5])); // 6

//------------------

// 4. Base Case and Recursive Case for Binary Search 

// * Base case: an array with one item. If the item you're looking for matches the item in the array, then you got it! If not, then it's not in the array.

// * Recursive Case: split the array in half, throw away one half and call the binary search on the other.

//------------------

// ********* QUICK SORT ~!

const quickSort1 = arr => {
  // start with base case --> arrays with zero to 1 elements are already sorted!
  if(arr.length < 2) return arr;

  const pivot = arr[0]; 

  // slice grabs first element on wards in arr, filter will check each element against pivot
  const lessThan = arr.slice(1).filter(e => e <= pivot);
  const greaterThan = arr.slice(1).filter(e => e > pivot);

  // spread operator to concat arrays together without duplicates
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)];

}

console.log(quickSort([10, 5, 2, 3])); // --> [2, 3, 5, 10]


// ** additional exercises from the chapter:

// HOW LONG would each of these OPERATIONS take in BIG O Notation?

// 5. Printing the value of each element in the array.
// * O(n) --> linear time
// 6. Doubling the value of each element in an array.
// * O(n) --> linear
// 7. Doubling the value of just the first element in the array.
// * O(1) --> constant 
// 8. Creating a multiplication table with all of the elements in the array.
// * O(n^2)