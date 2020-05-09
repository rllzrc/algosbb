// * Day 8 of 30 Days of Code Challenge Part II (May Edition)!!
// * ~ Valid Perfect Square 

// TASK !!
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Note: Do not use any built-in library function such as sqrt.

// * first attempt!
// runtime complexity:
// * O(n) --> linear

const isPerfectSquare = num => {
  // loop up until the number
  for(let i = 0; i <= num; i += 1) {
    // check if i * itself is = to num
    if(i * i === num) {
      return true;
    }
  }
  return false;
}

// * test cases!!
console.log(isPerfectSquare(16)); // -> true
console.log(isPerfectSquare(14)); // -> false
console.log(isPerfectSquare(8)); // -> false
console.log(isPerfectSquare(9)); // -> true