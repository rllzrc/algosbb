// * basic example:

function baesicRec(max, current) {
  if(current > max) return;
  return current;
  basicRecursion(max, current+1);
}

// * classic recursion with fib!

function fibonacci(n) {
  // ---> can also write it out as if(n === 0 || n === 1) but for edge cases the n <= 2 is better..
  if(n <= 2){ 
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// * classic recursion with factorials!

function factorials(num){
  if(num < 2) return 1;
  return num * factorial(num-1);
}