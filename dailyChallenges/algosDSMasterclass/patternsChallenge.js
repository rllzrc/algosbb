// * Put Your Reps In!
// * { Problem Solving Patterns Challenges! }

// * T A S K #1
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
// console.log(sameFrequency(182, 281)); // -> true
// console.log(sameFrequency(34, 14)); // -> false
// console.log(sameFrequency(3589578, 5879385)); // -> true
// console.log(sameFrequency(22, 222)); // -> false

// *** T A S K # 2 ~~
// Implement a function called areThereDuplicates which accepts a variable number of args and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// * first attempt: use frequency counter 
function areThereDuplicates1 () {
  // create a cache to store frequency counts
  const cache = {};
  // iterate through values in arguments
  for(let val in arguments) {
    // map out key/val pairs
    cache[arguments[val]] = (cache[arguments[val]] || 0) + 1;
  }
  //console.log(cache);
  // check cache
  for(let key in cache) {
    if(cache[key] > 1) return true;
  }
  // else
  return false;
};

// * second attempt: multiple pointers
const areThereDuplicates2 = (...args) => {
  // sort out the args arr
  args.sort((a, b) => a > b);
  // create pointer variables
  let left = 0;
  let right = 1;
  // iterate through while right is less than the length of args
  while(right < args.length) {
    // check if args at left is equal to right
    if(args[left] === args[right]) {
      return true;
    }
    // increment both values to move on the the next element
    left += 1;
    right += 1;
  }
  return false;
};

// * third attempt: one liner using set
function areThereDuplicates3 () {
  return new Set(arguments).size !== arguments.length;
}

// * test cases!!
console.log(areThereDuplicates(1,2,3)); // -> false
console.log(areThereDuplicates(1,2,2)); // -> true
console.log(areThereDuplicates('a','b','c','a')); // -> true