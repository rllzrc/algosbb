// ** Day 21 of 30 Days of Code Challenge Part X -- August Edition! 
// ** --> { Sort Array By Parity !!! }

// T A SK !!!

// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// * first attempt: use DP
const sortArrayByParity = (A) => {
  let k = 0;
    
    for(let i = 0; i < A.length; i += 1) {
        if(!(A[i] % 2)) [A[i], A[k++]] = [A[k], A[i]]
    }
    return A;
};

// * test cases!!
console.log(sortArrayByParity([3,1,2,4])); // -> [2,4,3,1]
// [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
