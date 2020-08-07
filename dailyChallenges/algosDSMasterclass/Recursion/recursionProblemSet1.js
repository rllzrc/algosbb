// * Put Your Reps In!
// * { Recursion Problem Set 1! }

// *** T A S K # 1 !!! ~~
// Write a function which accepts a base and an exponent. The function should return the power of the base to the exponent. Mimics math.pow() -- no need to worry about negative bases and exponents. 

// * first attempt: 
const power = (base, exponent) => {
  // base case
  if(exponent === 0) return 1;
  return base * power(base, exponent -1);
};

// * test cases!
// console.log(power(2, 0)); // -> 1
// console.log(power(2, 2)); // -> 4
// console.log(power(2, 4)); // -> 16

// -----

// *** T A S K # 2 !!! ~~
// Write a function that accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; ex factorial four (4!) is equal to 24 since 4*3*2*1 = 24 -- factorial 0 is always 1

// * first attempt:
const factorial = num => {
  // base case
  if(num < 0) return 0;
  if(num <= 1) return 1;
  // run again but w/ different (updated) input
  return num * factorial(num - 1);
};

// * test cases!
console.log(factorial(1)); // -> 1
console.log(factorial(2)); // -> 2
console.log(factorial(4)); // -> 24
console.log(factorial(7)); // -> 5040

