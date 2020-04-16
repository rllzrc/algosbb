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

const checkValidStr1 = str => {
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
      //console.log(str[i], str[i+1]);
      return false;
    } else if(str[i] === left && str[i + 1] === right) {
      return true;
    }
  }

  //console.log('cache after loop!', cache);
  
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

// * second approach --> 2 pointer solution >> time: O(n) linear // space: O(1) constant

// keep two counters, each for a separate kind of parentheses --> increment it accordingly, decrement counter if yo see the opposite '(' --> ++ ')' --
// flip that logic for the second counter
// increment both counters if *
// if result >= 0 --> same number of opening/closing () else return false

const checkValidStr2 = str => {
  // declare two variables to keep as trackers, each for a separate kind of parenthesis
  let length = str.length-1;
  let leftOpen = 0;
  let rightClosed = 0;

  // iterate through the string and increment / decrement accordingly
  for(let i = 0; i <= length; i += 1) {
    if(str[i] === '*' || str[i] === '(') {
      leftOpen += 1;
    } else {
      leftOpen -= 1;
    }

    if(str[length - i] === '*' || str[length - i] === ')') {
      rightClosed += 1;
    } else {
      rightClosed -= 1;
    }

    // if counts are less than zero, they are not balanced
    if(leftOpen < 0 || rightClosed < 0) return false;
  }
  return true;
}

// * third approach: using two stacks!!
// first stack: for storing indices of (
// second: store empty strings
// if *, check if an open stack is empty
// loop through the string
// push ( to open stack, if * push in second, if ) pop one element from open stack but if its empty pop one from the second stack but if its also empty return false

const checkValidStr = str => {
  let open = [];
  let misc = [];

  for(let i = 0; i < str.length; i += 1) {
    if(str[i] === '(') {
      //console.log('in the first if');
      open.push(str[i]);
    } else if(str[i] === '*') {
      //console.log('in the 2nd if');
      misc.push(str[i]);
    } else if(open && open.length) {
      //console.log('in the 3rd if');
      open.pop();
    } else if(misc && misc.length) {
      //console.log('in the 4th if');
      misc.pop();
    } else {
      return false;
    }
  }

  while(open && open.length && misc && misc.length) {

    //console.log('in the while loop');
    let lastOpen = open.pop();
    let lastMisc = misc.pop();

    if(lastOpen > lastMisc) {
      //console.log('in the last if');
      return false;
    }
  }

  if(open && open.length !== 0) {
    return false;
  }
  
  return true;
}

// * test cases!
console.log(checkValidStr("()")); // --> true
console.log(checkValidStr("(*)")); // --> true
console.log(checkValidStr("(*))")); // --> true
console.log(checkValidStr(")(")); // --> false
console.log(checkValidStr("((*)))")); // --> true
console.log(checkValidStr(")")); // --> false
