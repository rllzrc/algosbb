// * Day 7 of 30 days of code challenge --> countingElements~

// TASK:
// Given an integer array arr, count element x such that x + 1 is also in arr.
// If there're duplicates in arr, count them seperately.

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

const countElements = arr => {

  let cache = {};
  let result = 0;

  arr.forEach(el => {
    cache[el] = 1;
  });

  //console.log(cache)

  for(let i = 0; i < arr.length; i +=1) {
    //console.log(arr[i]);
    //console.log('ugh', arr[i] + 1);
    if(cache.hasOwnProperty(arr[i] + 1)) {
      result += 1;
    }
  }

  return result;

}



// * test cases!

console.log(countElements([1,2,3])); // --> 2
console.log(countElements([1,1,3,3,5,5,7,7])); // --> 0
console.log(countElements([1,3,2,3,5,0])); // --> 3
console.log(countElements([1,1,2,2])); // --> 2