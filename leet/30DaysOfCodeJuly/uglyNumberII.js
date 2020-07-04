// ** Day 4 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Ugly Number II ! }

// T A S K !!!
// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

// * first attempt:
const nthUglyNumber = n => {
  // quick edge case checks
  if(n <= 0) return false;
  if(n === 1) return true;

  // create pointer variables for 235
  let p2 = 0;
  let p3 = 0;
  let p5 = 0;

  // create a variable to store output
  const output = [];
  output[0] = 1;

  for(let i = 1; i < n; i += 1) {
    // perform math stuff in current element
    output[i] = Math.min(output[p2] * 2, Math.min(output[p3] * 3, output[p5] * 5));

    // check conditionals
    if(output[i] === output[p2] * 2) p2++;
    if(output[i] === output[p3] * 3) p3++;
    if(output[i] === output[p5] * 5) p5++;
  }
  return output[n - 1];
}

// * test cases!
console.log(nthUglyNumber(10)); // -> 12