// * Put Your Reps In!
// * { Problem Solving Patterns Challenges! }

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// MUST have O(N) complexity!

// * first attempt:
const same2 = (arr1, arr2) => {
  // quick short circuit check:
  if(arr1.length !== arr2.length) {
    return false;
  }

  // create variables to store frequency counters:
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  // map out key/value pairs
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // iterate through each frequency map counter
  for(let key in frequencyCounter1) {
    // is element squared found in frequency counter2?
    // if not, return false
    if(!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // do the values correspond? 
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// 
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