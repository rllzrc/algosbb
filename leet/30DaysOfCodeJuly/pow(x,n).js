// ** Day 16 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Pow(x, n) !! }

// T A S K !!
// Implement pow(x, n), which calculates x raised to the power n (xn).

// * first attempt: brute force ~
// x^n = x * n times
// or can look at it as x * [n - 1] 
// since x^2 = x*x and x^3 = x * x * x
// iterate until n - 1, keep result variable
const myPow = (x, n) => {
  // anything raised to the power of 0 = 1
  if(n === 0) return 1.0;
  if(n === 1) return x;
  // 1 divided by x - sq of everything take reciprocal to make it positive
  if(n < 0) return myPow(1/x, - n)

  // keep track of result
  let result = 1;
  // do fun math stuff here:
  for(let i = 0; i < n; i += 1) {
    result *= x;
  }
  return result; 
}

// * second attempt: reduce amount of multiplications!
// if n is an even number = (x^2)^n/2 * (x^2)^n/2
// x10 = (x^2)^5 * (x^2)^5 if odd multiply by x one more time
const myPow2 = (x, n) => {
  // base cases
  if(n === 0) return 1.0;
  if(n === 1) return x;
  let pow = Math.abs(n);

  let result = pow % 2 === 0 ? myPow(x * x, pow/2) : myPow(x * x,(pow - 1)/2) * x;
  
  return n < 0 ? 1/result : result;
}

// * test cases!!
console.log(myPow(2.00000, 10)); // -> 1024.00000
console.log(myPow(2.10000, 3)); // -> 9.26100
console.log(myPow(2.00000, -2)); // -> 0.25000 -- 2-2 = 1/22 = 1/4 = 0.25

