// * ALGORITHM TOOL KIT: DYNAMIC PROGRAMMING

// leet code problem # 509
// example using the famous fibonacci sequence algo!

// * frist pass using recursion !~

// runtime complexity:
// * O(n) = 2n --> recalculating subproblems already solved w each recursive call 

const fibonacci = n => {
  if(n === 0) return 0;
  if(n === 1 || n === 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// * approach #2; solve with dynamic programming
// runtime complexity:
// * O(n) --> linear 

const dynamicFib = n => {
  // initialize a new empty array
  let cache = [];

  // set the first value or element in cache to be 0 since 0th number in fib sequence is 0
  cache[0] = 0;
  // Initialize the second and third element of the array to 1. This is because the base case for the Fib sequnce is 1 where n is 1 or 2.
  cache[1] = 1;
  cache[2] = 1;
  // Begin filling the array. We know that the ith element of the Fib sequnce is equal to the previous two values of the sequence.
  // Iterate until the value of n since we want to return n. 
  for(let i = 3; i <= n; i += 1) {
    // Codeify the recurrence relation. Since f(n) = f(n - 1) + f(n - 2) 
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  // Return the nth element of the array. That is our answer.
  return cache[n]; 
}
