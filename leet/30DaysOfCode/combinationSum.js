// ** Days of Code Challenge Part X 
// ** --> { Combination Sum ! }

// T A S K !!
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// * first attempt: 
const combinationSum = (candidates, target) => {
  const n = candidates.length;
  const output = [];
  
  backtrack([], 0, 0);
  
  return output;
  
  function backtrack(arr, start, sum) {
      if (sum >= target) {
          if (sum === target) output.push([...arr]);
          return;
      }
      
      for (let i = start; i < n; i += 1) {
          const num = candidates[i];
          arr.push(num);
          backtrack(arr, i, sum + num);
          arr.pop();
      }
  
    return;
  }
};

// * test cases!
console.log(combinationSum(candidates = [2,3,6,7], target = 7)); // [[2,2,3],[7]]
console.log(combinationSum(candidates = [2,3,5], target = 8)); // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum(candidates = [2], target = 1)); // []