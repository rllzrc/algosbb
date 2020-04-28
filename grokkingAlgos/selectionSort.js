// * Chapter 2 Practice --> Selection Sort!

// Sort an array from smallest to largest.

// first step, write a function to find the smallest element from the array

// * runtime complexity
// * O(n^2) --> O(n * n) --> in proportion to the number of items * n times so n^2 (n * n operations)
const findSmalls = arr => {
  // create two variables to store smallest element and its index
  let smalls = arr[0];
  let smallsIndex = 0;

  // iterate through arr
  for(let i = 1; i < arr.length; i += 1) {
    // check if current element is smaller than smalls; reassign value accordingly
    if(arr[i] < smalls) {
      smalls = arr[i];
      smallsIndex = i;
    }
  }
  return smallsIndex;
}

// use the above logic to write out the rest of selection sort!
const selectionSort = arr => {
  // create a new variable to store output arr in
  const sortedArray = [];
  const length = arr.length;

  // iterate through the arr
  for(let i = 0; i < length; i += 1) {
    // find the smallest element in a given array and add it to the new output array
    const smalls = findSmalls(arr);
    // adding [0] to end of splice joins elements together into a single array
    // so instead of [[2] [3] [5]] --> you get [2,3,5]
    sortedArray.push(arr.splice(smalls, 1)[0]);
  }
  return sortedArray;
}

// * alternative selectionSort function
// findSmalls can also be written like a swap!

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex]  = array[secondIndex];
  array[secondIndex] = temp;
};

const selectionSort2 = (array, compare = (a, b) => a - b) => {
  // create a variable to store minIndex position
  let minIndex = 0;

  // iterate through the array
  for (let i = 0; i < array.length; i += 1) {

    // reassign minIndex to be i
    minIndex = i;

    // loop again check if the next element is smaller than current minIndex and j by running compare or sort function passed above
    for (let j = i + 1; j < array.length; j += 1) {
      if (compare(array[minIndex], array[j]) > 0) minIndex = j;
    }

    // invoke swap function 
    if (i !== minIndex) swap(array, i, minIndex);

  }

  return array;

};

// * test cases!
console.log(selectionSort([5,3,6,2,10])); // --> [2,3,5,6,10]
console.log(selectionSort2([5,3,6,2,10])); // --> [2,3,5,6,10]