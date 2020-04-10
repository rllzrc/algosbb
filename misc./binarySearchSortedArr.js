// * Implement Binary Search on a Sorted Array ~

// The TASK!
// Given a sorted array of integers, return the index of the given key. Return -1 if the key is not found.

// * solution #1: iterative approach

// runtime complexity: 
// * logarithmic, O(log n)

// memory complexity:
// * runtime is constant, O(1) 

// roadmap:
// * Hint: think of the divide and conquer approach
// 1. at every step, break the array between low and high indices
// 2. calculate the mid index
// 3. if the element at the mid index === key/target, return mid
// 4. if element at mid is > than key, change index high to mid-1
// 5. index low will remain the same
// 6. if element at mid < key, change low to mid + 1
// 7. index at high will remain the same
// 8. when low > high, key doesn't exist and -1 returns out

const binarySearch = (arr, key) => {

  // create a low variable, intitialize to 0 or start of arr
  let low = 0;
  // create a high variable, set it to end of arr
  let high = arr.length-1;

  // while loop to check if low is still lower than the high values
  // basically finding the middle value of the array
  while(low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    // if by chance we found the key at middle, return it out!
    if(arr[mid] === key) {
      return mid;
    }

    // if element at mid is greater than the key
    if(key < arr[mid]) {
      // reassingn high variable to be mid-1;
      high = mid - 1;
    } else {
      // else reassign low varibale to be mid+1
      low = mid + 1;
    }
  }
  // if not found, return -1;
  return -1;
}

// * test cases!
let arr = [1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222];
let inputs = [10, 49, 99, 110, 176];

// for (let i = 0; i < inputs.length; i++){
//   console.log("binarySearch(arr, " + (inputs[i])+ ") = " +  (binarySearch(arr, inputs[i])))
// }

console.log(binarySearch(arr, 10)); // --> 1
console.log(binarySearch(arr, 49)); // --> -1
console.log(binarySearch(arr, 99)); // --> 8
console.log(binarySearch(arr, 110)); // --> -1
console.log(binarySearch(arr, 176)); // --> 14