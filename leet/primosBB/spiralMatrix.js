// * Put Your Reps In ~ BB Challenges!!!
// ** --> { Spiral Matrix ~ }

// T A S K !!

// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// H I N T S ~
// Well for some problems, the best way really is to come up with some algorithms for simulation. Basically, you need to simulate what the problem asks us to do.

// We go boundary by boundary and move inwards. That is the essential operation. First row, last column, last row, first column and then we move inwards by 1 and then repeat. That's all, that is all the simulation that we need.

// * first attempt:
// pay attention to boundary
// shrink until you reach the middle
// top bottom left right bounds

// time complexity:
// * O(n) -> num of elements in matrix
// space complexity:
// * O(n) sane as above
const spiralOrder = matrix => {
  // initialize return value
  const nums = [];
  // quick edge case check:
  if(!matrix || matrix.length === 0) return nums;

  // initialize boundaries
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  // create a variable to check if we've reached the limit -> simple check to know if we've gotten all numbers
  const size = matrix.length * matrix[0].length;

  // iterate through matrix while size has not been met
  while(nums.length < size) {
    // pick up 123 aka first row
    // start at left most column
    for(let i = left; i <= right && nums.length < size; i += 1) {
      nums.push(matrix[top][i]);
    }
    // now traverse down but make sure no dupes! increment top!
    top++;

    // top right column to bottom column
    for(let i = top; i <= bottom && nums.length < size; i += 1) {
      nums.push(matrix[i][right]);
    }
    // don't add dupes, scoot right pointer over one to the left
    right--;

    // traverse back to the beginning of the matrix towards left
    for(let i = right; i >= left && nums.length < size; i -= 1) {
      nums.push(matrix[bottom][i]);
    }
    // move bottom up to not double count while going up left most column
    bottom--;
    // pickup nums in left most column
    for(let i = bottom; i >= top && nums.length < size; i -= 1) {
      nums.push(matrix[i][left]);
    }
    // make it smaller, move in one column to avoid dupes!
    left++;
  }
  return nums; 
}

// * test cases!!
console.log(spiralOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
])); // -> [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
])); // -> [1,2,3,4,8,12,11,10,9,5,6,7]