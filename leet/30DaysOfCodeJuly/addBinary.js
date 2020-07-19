// ** Day 19 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Add Binary! }

//  T A S K !!
// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

// binary is base 2
// be careful of carry
// iterate through strings and add each value and formulate a carry and a sum value
// keep track of indicies with loop

// Truth Table
// 1st + 2nd + carry = sum, new carry, decimal sum
//   0 +  0  + 0 = 0, 0 (0)
//   0 +  0  + 1 = 1, 0 (1)
//   0 +  1  + 1 = 0, 1 (2)
//   1 +  1  + 1 = 1, 1 (3)

// * first attempt:
const addBinary1 = (a, b) => {
  // create variables to hold on to index value
  let i = a.length-1;
  let k = b.length-1;
  // keep track of carry value
  let carry = 0;
  // iterate while it is greater than 0
  while(i >= 0 || j >= 0) {
    // keep track of values of digits added together
    // every iteration, might have a carry in the middle
    // so sum = carry, first initialized at 0
    let sum = carry 
    // error checks, make sure within bounds
    if(i >= 0) {
      // add it to sum 
      // off set character and convert to a num
      // convert to integer
      sum += a[i--] - '0';
    }

    // same thing for bk
    if(k >= 0) {
      sum += b[k--] - '0';
    }
  }
}

// * second attempt:
// time complexity:
// * O(n)
const addBinary = (a, b) => {
  // create a variable to keep track of result
  // lengths of a and b strings -- to hold on to index value
  let output = '';
  let i = a.length-1;
  let k = b.length-1;
  // keep track of carry value
  let carry = false;
  
  // helper/cb function to handle carries
  function binarySum (idx1, idx2) {
    // temp variable to add to it if carry exists and keep track of carries
    let temp = 0;
    // conditional check : if carry is truthy
    if(carry) {
      temp += 1;
      carry = false;
    }
  
    if (idx1 >= 0 && a[idx1] === '1') temp += 1;
    if (idx1 >= 0 && a[idx1] === '1') temp += 1;
    if (temp >= 2) {
      carry = true;
      temp -= 2;
    }
    return temp
  } 

  // loop while either a or b have values
  while(a[i] >= 0 || b[k] >= 0) {
    // reassign output to be result of running cb
    output += a[i--] - '0';
    output += b[k--] - '0';
  }
  
  // catch any remaning carries
  if(carry) {
    output = '1' + output;
  }
  return output;
}



// * test cases!!
console.log(addBinary(a = "11", b = "1")); // -> "100"
console.log(addBinary( a = "1010", b = "1011")); // -> "10101"