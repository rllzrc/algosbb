// * Chapter 2 Practice --> Selection Sort!

// Sort an array from smallest to largest.

// first step, write a function to find the smallest element from the array

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

// above function can also be written like a swap!

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex]  = array[secondIndex];
  array[secondIndex] = temp;
};

// use the above logic to write out the rest of selection sort!
const selectionSort = arr => {
  // create a new variable to store output arr in
  const sortedArray = [];
  const length = arr.length;

  // iterate through the arr
  for(let i = 0; i < length; i += 1) {
    // find the smallest element in a given array and add it to the new output array
    const smalls = findSmalls(arr);
    sortedArray.push(arr.splice(smalls, 1)[0]);
  }
  return sortedArray;
}

// alternative selectionSort function

const selectionSort2 = (array, compare = (a, b) => a - b) => {

  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {

    minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[minIndex], array[j]) > 0) minIndex = j;
    }

    if (i !== minIndex) swap(array, i, minIndex);

  }

  return array;

};

// * test cases!
console.log(selectionSort([5,3,6,2,10])); // --> [2,3,5,6,10]
console.log(selectionSort2([5,3,6,2,10])); // --> [2,3,5,6,10]