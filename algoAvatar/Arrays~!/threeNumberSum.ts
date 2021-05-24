// ** AE: Arrays Reps Challenge  ~ TS Edition ~
// ** --> { Three Number Sum !!! }

// T A SK !!!

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

// If not three numbers sum up to the target sum, the function should return an empty array.

// * --- Roadmap --- *
// input: array of non empty no repeat integers + an integer representing the target sum
// output: a two dimensional array of all these triplets, empty array if no sum to target (in ascending order)
// constraints: optimize
// edge cases: cannot add a number to itself to reach target sum 

// * ~ main squeeze :
// three for loops but not optimal => iterate once, at each number iterate to the remaining array and check if the sum = 0 (O(N^3)) Y I K E S!
// hash table + double for loop could work but extra space being used ~ => complications w dupes, more tricky manipulations

// * use the sort array in ascending order method + a left and right pointer to find the answer instead ~
// sort array so we can find triplets via two loops using left & right pointers
// iterate once, starting at array[0], left pointer to the one next to it array[1] and right pointer at the end array[array.length]
// have a current sum variable = currentNum + L + R
// check if currentSum = targetSum
// if so, add those three nums to the triplets array 
// if not, check if the currentSum is less than or greater than the targetSum
// move pointers in such a way that gets you closer to the target sum
// if less than, move left pointer
// if greater than, move right pointer
// after we find the current sum, this is the only case we want to move both pointers at the same time
// once the two pointers pass each other, we are done with that round of iteration so move currentNumber to the right by one


// * time complexity: O(N ^ 2) => iterate through main array once (when we set currentNum), and for each of these nums, while loop for L & R pointers to iterate through the rest of the array (sorting will not affect overall time)
// * space complexity: O(N) due to triplet array return value

type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number) {
  array.sort((a, b) => a - b);
  // initialize return value to empty array
  const triplets: Triplet[] = [];

  // condition: third spot from the end of the array (we always want to have 3 nums, left, right, and third value from end of array)
  for(let i = 0; i < array.length - 2; i += 1) {
    // init pointer variables
    let left = i + 1;
    let right = array.length - 1;
    // loop as long as within bounds (no overlaps)
    while(left < right) {
      const currentSum = array[i] + array[left] + array[right];
      // check with targetSum
      if(currentSum === targetSum) {
        // append triplets to return value
        triplets.push([array[i], array[left], array[right]]);
        // gotta increment both to balance it out (right = less, left = more)
        left += 1;
        right -= 1;
      } else if(currentSum < targetSum) {
        // guarantee a greater value
        left += 1;
      } else if(currentSum > targetSum) {
        // guarantee a lesser value
        right -= 1;
      }
    }
  }
  return triplets;
};