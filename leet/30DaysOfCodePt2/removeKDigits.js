// ** Day 13 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Remove K Digits ! }

// T A S K !!!
// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.

// ~ roadmap:
// while moving left to right, keep track and compare which num is smaller, if the prev number is greater than current get rid of it
// use stack as a data structure to keep track (stack[-1]) .join in the end to return as a string value
// shift to remove leading zeroes 

// * first attempt:
// using stack DS to keep track of nums
// refactor later to pass all test cases
const removeKDigits = (num, k) => {
  // quick edge case check:
  if(num.length === k) {
    return '0';
  }
  // create a stack ds to keep track of nums
  let stack = [];
  // create another variable to keep track of number of items to remove:
  let numToPop = k;

  // loop through the nums string
  for(let i = 0; i < num.length; i += 1) {
    // check conditions with while loop:
    // so while the number of items to pop exists
    // && the stack exists aka its not empty
    // && the last element in stack is greater than the current element

    while(numToPop && stack && stack[stack.length-1] > num[i]) {
      console.log('hello!');
      stack.pop();
      numToPop -= 1;
    }

    // remove leading zeroes:
    if(stack[0] === '0') {
      //console.log('in the if~');
      stack.pop();
    }

    stack.push(num[i]);
  }

  //console.log(numToPop);
  console.log(stack);

  // convert array into string for final result variable 
  const result = stack.join('');
  //console.log(typeof result);
  
  return result;
  // check the length of result, if it exists, return that else 0
  // if(result.length > 0) {
  //   return result;
  // } else {
  //   return '0';
  // }

}


// * test cases!!
// console.log(removeKDigits(num = "1432219", k = 3)); // ->  "1219"
// console.log(removeKDigits(num = "10200", k = 1)); // ->  "200"
// console.log(removeKDigits(num = "10", k = 2)); // ->  "0"
// console.log(removeKDigits(num = "9", k = 1)); // ->  "0"
console.log(removeKDigits(num = "112", k = 1)); // ->  "11"