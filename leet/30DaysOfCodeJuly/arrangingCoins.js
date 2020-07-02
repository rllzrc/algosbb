// ** Day 1 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Arranging Coins ! }

// T A S K !!
// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// * first attempt:
const arrangeCoins1 = n => {
  // create a result variable
  let result = [];
  i = 1;

  // iterate while n is less than or equal to 1
  while(n >= i) {
    // if so, push into results arr
    result.push(i);
    // reassign values
    n -= i;
    // increment i 
    i += 1;
  }
  return result.length;
};

// * second attempt: use binary search!
const arrangeCoins = n => {
  // create pointer variables
  let left = 0;
  let right = n;

  // iterate while left is smaller than or equal to right
  while(left <= right) {
    // create a middle point variable
    let mid = Math.floor((left + right) / 2);
    let curr = mid * (mid + 1) / 2;

    // check if curr is equal to n
    if(curr === n) return mid;

    if(n < curr) {
      // reassign right value
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

// * test cases!!
console.log(arrangeCoins(5)); // -> 2
console.log(arrangeCoins(8)); // -> 3