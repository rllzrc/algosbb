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
// body = inner part of the loop, the code that gets run over and over again

function factorials(num){
  // * start w base case
  if(num < 2) return 1;
  // * a factorial is n * factorial(n-1)
  return num * factorial(num-1);
}

// potential test case ex:
// describe('factorial', function() {
//   it('should do factorials', () => {
//     expect(factorial(1)).toEqual(1);
//     expect(factorial(2)).toEqual(2);
//     expect(factorial(3)).toEqual(6);
//     expect(factorial(10)).toEqual(3628800);
//   });
// });