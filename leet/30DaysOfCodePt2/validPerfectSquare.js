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
// start left at 2 and right at num (end)
// mid value with be the above digits / 2
// keep looping while left is less than right
// check if mid * mid is = num; if not increment l+r values accordingly

// runtime complexity:
// * O(log n)
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
    // make sure to floor number since decimals were throwing off calculations ~
    let mid = Math.floor((left + right) / 2);
    //console.log(mid);
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
console.log(isPerfectSquare(81)); // -> true