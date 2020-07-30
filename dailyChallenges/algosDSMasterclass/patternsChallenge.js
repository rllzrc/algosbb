// * Put Your Reps In!
// * { Problem Solving Patterns Challenges! }

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// MUST have O(N) complexity!

// * first attempt:
// time complexity:
// * Linear -- O(N)
const sameFrequency = (num1, num2) => {
  // quick edge case check 
  if(!num1 || !num2 || num1.length !== num2.length) return false;
  // convert num to string
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  // create hash map object to store num frequency count
  const cache1 = {};
  const cache2 = {};
  // map out key/val pairs into cache 
  for(let char of strNum1) {
    cache1[char] = (cache1[char] || 0) + 1;
  }
  for(let char of strNum2) {
    cache2[char] = (cache2[char] || 0) + 1;
  }
  // iterate through first cache frequency counter
  for(let key in cache1) {
    // do the values correspond?
    if(cache2[key] !== cache1[key]) {
      return false;
    }
  }
  return true;
}

// * test cases!!
console.log(sameFrequency(182, 281)); // -> true
console.log(sameFrequency(34, 14)); // -> false
console.log(sameFrequency(3589578, 5879385)); // -> true
console.log(sameFrequency(22, 222)); // -> false