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
// console.log(factorial(1)); // -> 1
// console.log(factorial(2)); // -> 2
// console.log(factorial(4)); // -> 24
// console.log(factorial(7)); // -> 5040

// -----

// *** T A S K # 3 !!! ~~
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// * first attempt:
const productOfArray = nums => {
  // base case
  if(nums.length === 0) return 1;
  // run again with different input
  return nums[0] * productOfArray(nums.slice(1));
};

// * test cases!
// console.log(productOfArray([1,2,3])); // -> 6
// console.log(productOfArray([1,2,3,10])); // -> 60

// -----

// *** T A S K # 4 !!! ~~
// Write a function which accepts a number and adds up all the numbers from 0 to the number passed to the function.

// * first attempt:
const recursiveRange = num => {
  // base case
  if(!num || num === 0) return 0; 
  // run again with different input
  return num + recursiveRange(num - 1);
};

// * test cases!!
// console.log(recursiveRange(6)); // -> 21
// console.log(recursiveRange(10)); // -> 55

// -----

// *** T A S K # 5 !!! ~~
// Write a recursive function which accepts a number and returns the nth number in the Fib sequence. Fib = sequence of whole numbers 1,1,2,3,5,8 starts with 1 and 1 and where every number thereafter is equal to the sum of the previous two numbers.

// * first attempt:
const fib = num => {
  // base case
  if(num <= 2) return 1;
  // run again but change input
  return fib(num - 1) + fib(num - 2);
};

// * test cases!!
// console.log(fib(4)); // -> 3
// console.log(fib(10)); // -> 55
// console.log(fib(28)); // -> 317811
// console.log(fib(35)); // -> 9227465