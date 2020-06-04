// * Day 2 Challenge ! --> Happy Number

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// steps:
// 1. break the number 19 into separate digits of 1 and 9
// 2. square each digit
// sum the squares
// check if the sum equals 1
// if the sum is 1, return true
// else go back to step 1 and repeat

// * second approach: pass with while loops!
// store math stuff in cache object and check key/val pairs
// split numnber 19, 1 and 9 -> square its digits, add both, repeat cycle
// define a helper func called sqsum -> take num % 10 and divide by 10
// use a set or cache object to keep track of values
const happyNumber1 = n => {
  let cache = {};
  let temp = 0;
  
  if(n < 1) return false;
  
  while(n !== 1 && !cache[n]) {
      cache[n] = true;
      temp = 0;
      
      while (n > 0) {
          temp += Math.pow(n % 10, 2);
          n = Math.floor(n / 10);
      }
      
      n = temp;
  }
  
  return n === 1;
};

// * first pass, does not work:

const happyNumber2 = (num, counter = 0) => {
  // create a variable called result, set it to false
  let result = false;

  if(counter < 8) {
    // as long as we called recursion fewre than 8x, increment counter and start over

    // 1. break the number 19 into separate digits of 1 and 9
    // it will give an array that looks like this ["1", "9"]
    // map will then square each digit
    let soloArray = num.toString().split('').map(num => num * num);

    // sum the squares using reduce!
    // the callback in reduce sets the sum to an initial value of zero, then it loops over every item in the array
    // first loop will add current to acc
    // once its all done, sum = the sum of all the elements in the array
    let sum = soloArray.reduce((acc,        currentItem) => acc + currentItem, 0);
    
    // check the sum and return true if it equals one
    if(sum === 1) {
      return true;
    } else {
      counter++;

      // start over with recursion, add a coutner variable as a default parameter so it doesnt set to zero in each recursive call 
      happyNumber(sum, counter)
    } 
  }

  return result;
}

// * test case !!

console.log(happyNumber(19)); // --> true
console.log(happyNumber(4)); // --> false

