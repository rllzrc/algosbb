// ** Day 20 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Permutation Sequence ! }

// T A S K !
// The set [1,2,3,...,n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note:

// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.

// * first attempt:

const getPermutation = (n, k) => {
  let ns = []
  let res = []
  let pos = k-1;

  for (let i = 1; i <= n; i += 1) { 
    ns.push(i); 
  }

  let nfac = ns.reduce((prev, curr)=> prev*curr);

  if (k < 1|| k > nfac) { 
    return "error"; 
  }

  for (let j = n; j >= 1; j -= 1) {
  nfac/=j;
  res.push(ns.splice(parseInt(pos/nfac),1)[0]);
  pos%=nfac;
  }
  return res.join("");
}


// time complexity:
// * O(n * n!) -> n factorial permutations and linear amount of work it needs to take -> there are n! permutations and it takes O(n) time to add each one to the result array
// space complexity:
// * O(n * !n) -> w/ array
// just printing -> O(n) -> not storing space

// * BACKTRACKING APPROACH (DFS) -> Brute Force
// not for optimization -> for finding all solutions such as permutations -> all possible arrangements

// state space tree -> shows all possibilities n! factorial
// any constraints? kill node via bounding function

// * Branch and Bound (BFS)
// generated level-wise



// * test cases!!
console.log(getPermutation(n = 3, k = 3)); // -> "213"
console.log(getPermutation(n = 4, k = 9)); // -> "2314"