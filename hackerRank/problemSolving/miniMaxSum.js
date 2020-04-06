// * Mini Max Sum !

// given an array of integers, find the minimum and maximum values that can be calculated by summing up the integers.

// input example: [1,3,5,7,9]
// output: 16 24

// * brute force approach
// * add up the sum of all the elements
// * mini value will be sum - max element 
// * max value will be sum - mini element
const miniMaxSum = arr => {

  // sort out array so nums are in order
  arr = arr.sort((a,b) => a-b);
  // create a var to store mini and max values in
  let mini = arr[0];
  let max = arr[arr.length-1];
  let sum = 0;


  // loop through and sum up all of the elements
  for(let i = 0; i < arr.length; i += 1 ){
    sum += arr[i];
  }

  // re-assign values of mini to be the sum - max num and sum - min num
  let small = sum - max;
  let big = sum - mini;

  console.log(small, big);
}

// * test cases!

console.log(miniMaxSum([1,3,5,7,9])); // --> 16 24
console.log(miniMaxSum([1,2,3,4,5])); // --> 10 14