// create a function that checks if a number (n) is divisible by two numbers (x and y)
// all inputs are positive, non-zero digits

const isDivisible = (n,x,y) => {
  // later add test cases for if a number passed is not positive and should not be a zero 
  if(n <= 0 && x <= 0 && y <= 0){
    return 'positive integers only please!';
  }

  // check to see if n is divisible by x and y
  if(n % x === 0 && n % y === 0){
    return true;
  }
  return false;
}

// isDivisible with ternary!

// function isDivisible(n, x, y) {
//   return (n % x === 0 && n % y === 0) ? true : false;
// }



// test cases
console.log(isDivisible(0,0,0)); // --> return string 
console.log(isDivisible(3,3,4)); //false);
console.log(isDivisible(12,3,4)); //true);
console.log(isDivisible(8,3,4)); // false