// * Day 16 of 30 Days of Code Challenge! Valid Parenthesis String

// The TASK !!!

// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// * Example 1:
// Input: "()"
// Output: True

// * first pass: brute force approach:

const checkValidStr = str => {
  // create a varaible to store left and right parenthesis in
  let left = '(';
  let right = ')';

  // create an object to keep track of how many left and right parenthesis are in the string
  let cache = {
    [left]: 0,
    [right]: 0,
    star: 0
  }
  
  //iterate through the str
  for(let i = 0; i < str.length; i += 1) {
    // go through eac character in the string and add it as keys to the cache object
    if(str[i] === left) {
      console.log('in the first if!');
      cache[left] += 1;
    } else if (str[i] === right) {
      cache[right] += 1;
    } else if (str[i] === '*') {
      cache.star += 1;
    }

    if(str[i] === right && str[i + 1] === left) {
      console.log(str[i], str[i+1]);
      return false;
    } else if(str[i] === left && str[i + 1] === right) {
      return true;
    }
  }

  console.log('cache after loop!', cache);
  
  // * check cache values
  if(cache[left] && cache[right] % 2 === 0) {
    return true;  
  } else if(cache[left] > cache[right] || cache[left] < cache[right]) {
    if(cache[left] - cache[right] === 1 || cache[right] - cache[left] === 1 && cache.star === 1) {
      return true;
    }
  } else if(cache[left] && cache[right] && cache.star === 1) {
    return true;
  }
  
  return false;
}

// * test cases!
console.log(checkValidStr("()")); // --> true
console.log(checkValidStr("(*)")); // --> true
console.log(checkValidStr("(*))")); // --> true
console.log(checkValidStr(")(")); // --> false
console.log(checkValidStr("((*)))")); // --> true
