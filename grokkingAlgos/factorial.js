// * Chapter 3: Recursion Practice

const factorial = x => {
  // base case
  if(x === 1) {
    return 1;
  } else {
    // recursive case
    return x * factorial(x - 1);
  }
}

// * test cases!
console.log(factorial(5));
console.log(factorial(3));

