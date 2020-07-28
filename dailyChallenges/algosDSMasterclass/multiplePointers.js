// * Put Your Reps In!
// * { Multiple Pointers Pattern }

// Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition.

// * VERY efficient for solving problems with minimal space complexity as well ~

// T A S K !!
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair doesn't exist.

// * first attempt: naive solution
// time complexity: 
// * Quadratic -- O(N^2)
// space complexity:
// * Constant -- O(1)
const sumZero1 = arr => {
  // iterate through the array
  for(let i = 0; i < arr.length; i += 1) {
    // compare to every other number 
    for(let k = 0; k < arr.length; k += 1) {
      if(arr[i] + arr[k] === 0) {
        return [arr[i], arr[k]];
      }
    }
  }
}

// * second attempt: refactored solution from above
// time complexity:
// * Linear -- O(N)
// space complexity:
// * Constant O(1)
const sumZero = arr => {
  // create left and right pointer variables
  let left = 0;
  let right = arr.length - 1;
  // iterate while left is smaller than right
  while(left < right) {
    // create a sum variable to keep track of
    let sum = arr[left] + arr[right];
    // check if sum = 0
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      // decrement right value, move closer to start
      right -= 1;
    } else {
      // if sum is less than zero, add to left value closer to the end
      left += 1;
    }
  }
};

// * test cases!
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // -> [-3, 3];
console.log(sumZero([-2, 0, 1, 3])); // -> undefined
console.log(sumZero([1, 2, 3])); // -> undefined
console.log(sumZero([-4,-3,-2,-1,0,1,2,5])); // -> [-2, 2]