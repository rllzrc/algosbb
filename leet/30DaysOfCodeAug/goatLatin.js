// ** Day 18 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Goat Latin !!! }

// T A SK !!!

// Given an array of integers A, We need to sort the array performing a series of pancake flips.

// In one pancake flip we do the following steps:

//     Choose an integer k where 0 <= k < A.length.
//     Reverse the sub-array A[0...k].

// For example, if A = [3,2,1,4] and we performed a pancake flip choosing k = 2, we reverse the sub-array [3,2,1], so A = [1,2,3,4] after the pancake flip at k = 2.

// Return an array of the k-values of the pancake flips that should be performed in order to sort A. Any valid answer that sorts the array within 10 * A.length flips will be judged as correct.

// * first attempt: 
const pancakeSort = (A) => {
  let res = [];
  let curr = A.length;
  while (curr > 0) {
      const idx = A.indexOf(curr);
      if (idx != curr - 1) {
          res.push(idx + 1);
          flip(idx, A);
          res.push(curr);
          flip(curr - 1, A);
      }
      curr--;
  }
  return res;
};

const flip = (i, A) => {
  for(let j = 0; j <= Math.floor(i / 2); j++) {
      [A[i - j], A[j]] = [A[j], A[i - j]];
  }
};

// * test cases!!
console.log(pancakeSort(A = [3,2,4,1])); // -> [4,2,4,3]
console.log(pancakeSort(A = [1,2,3])); // -> []