// * Put Your Reps In!
// * { Divide & Conquer !! }

// Introducing Concepts -- more later during Binary Search section

// * first attempt: naive solution 
// * Linear Search 
const search = (arr, val) => {
  // iteterate through arr
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// * second attempt: refactored approach using Binary Search
// time complexity:
// * Log(N) 
const binarySearch = (arr, val) => {
  // create variables for min and max to keep track of
  let min = -Infinity;
  let max = array.length - 1;
  // iterate while min is less than or equal to max aka left <= right
  while(min <= max) {
    // create a mid variable
    let mid = Math.floor((min + max) / 2);
    let curr = arr[mid];

    // check if arr at mid is less than val
    if(arr[curr] < val) {
      // reassign min
      // go towards right side or end of arr
      min = mid + 1;
    } else if(arr[curr] > val) {
      // reassign max
      // go towards the left side or start of arr
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}