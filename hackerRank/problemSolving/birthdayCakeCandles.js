// * birthdayCakeCandles challenge ~

// Function Description / Task: 

// Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.
// birthdayCakeCandles has the following parameter(s):
// ar: an array of integers representing candle heights

// * brute force approach: 

const birthdayCakeCandles = arr => {
  // create a variable to track the highest num
  let count = 0;
  
  // sort the array so its already in order
  let sortedArr = arr.sort((a,b) => a-b);

  // create a variable to store largest num, this case it will be the last item in the arr.
  let height = sortedArr[arr.length-1];

  // loop through the array 
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === height) {
      // if the current element is equal to count, add 1
      count += 1;
    }
  }
  return count;
}

// * test cases! 
console.log(birthdayCakeCandles([3,2,1,3])); // --> 2
console.log(birthdayCakeCandles([3,2,1,3,4,5,5,5])); // --> 3