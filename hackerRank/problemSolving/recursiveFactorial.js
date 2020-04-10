// * Day 9 of 30 Days of Code Challenge!


// TASK!
// Write a factorial function that takes a positive integer,  as a parameter and prints the result of  ( factorial).

// Note: If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of

// * first pass without recursion

function factorial(n) {
  // Complete this function
  var fac = 1;
  for(i=1;i<=n;i++){
      fac = fac*i;
  }
  return fac;
}

const recFactorial = n => {
  let factorial = 1;

  for(let i = 1; i <= n; i += 1) {
    factorial = factorial * i;
  }

  return factorial;
}



// * test cases!
console.log(recFactorial(3)); // --> 6



