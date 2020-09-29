// * { Merge Sort !! }

// the cannonical divide + conquer algorithm!
// This combined merge with the divide-and-conquer recursion proves to be pretty effective. When you call Array.prototype.sort it often uses MergeSort (depending on the engine and the types of the elements in the array.) MergeSort is also stable which just means if you have equivalent elements, it will keep their original order in the array. This is sometimes important and sometimes not.

// * Time Complexity: O (n log n) - logarithmic 
// * Space Complexity: O(n) - linear

// * Recursive Approach with Divide + Conquer:
const mergeSort = nums => {
  // base case
  if(nums.length < 2) return nums;
  // create variables for length, middle, left + right subarrs
  const length = nums.length 
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);
  // run and return recursive helper merge function passing in mergeSort with left and right values
  return merge(mergeSort(left), mergeSort(right));
};

// * recursive helper merge function
const merge = (left, right) => {
  // create a variable for output 
  const output = [];
  // iterate while left and right subarrs have value
  while(left.length && right.length) {
    // check if left element is smaller than right's
    if(left[0] <= right[0]) {
      // push value into output arr
      output.push(left.shift());
    } else {
      // do the reverse
      output.push(right.shift());
    }
  }
  return output.concat(left, right);
};

// * test cases!!
console.log(mergeSort([5,6,7,2,3,1])); // -> [1,2,3,5,6,7]
console.log(mergeSort([10,5,3,8,2,6,4,7,9,1])); // -> [1,2,3,4,5,6,7,8,9,10]