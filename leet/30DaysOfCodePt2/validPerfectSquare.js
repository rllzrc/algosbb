// * Day 8 of 30 Days of Code Challenge Part II (May Edition)!!
// * ~ Valid Perfect Square 

// TASK !!
// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Note: Do not use any built-in library function such as sqrt.

// * first attempt!
// runtime complexity:
// * O(n) --> linear

const isPerfectSquare1 = num => {
  // loop up until the number
  for(let i = 0; i <= num; i += 1) {
    // check if i * itself is = to num
    if(i * i === num) {
      return true;
    }
  }
  return false;
}

// * second attempt --> use binary search method
// have a left and right pointer
const isPerfectSquare = num => {
  // quick edge case check
  if(num < 2) {
    return true
  }
  // create two pointer variables 
  let left = 2;
  let right = num;

  // loop while left is less than or equal to right
  while(left <= right) {
    // set up a mid point value
    let mid = (left + right) / 2;
    if(mid * mid === num) {
      return true;
    } else if(mid * mid > num) {
      // reassign pointer values right decreases left increases
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

// * test cases!!
console.log(isPerfectSquare(16)); // -> true
console.log(isPerfectSquare(14)); // -> false
console.log(isPerfectSquare(8)); // -> false
console.log(isPerfectSquare(9)); // -> true