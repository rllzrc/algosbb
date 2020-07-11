// ** Day 11 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Subsets! }

// T A S K !!
// Given a set of distinct integers, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// * first attempt: use backtracking ~
const subsets = nums => {
  // create a list variable to return out later
  let output = [];
  // invoke recursive backtracking function
  backtrack(output, [], nums, 0);
  return output;
}

const backtrack = (output, tempArr, nums, start) => {
  // clone array
  // use ES6 spread syntax [...tempArr]
  // for ES5 JSON.parse(JSON.stringify(tempArr));
  output.push([...tempArr]);
  // iterate through nums arr
  for(let i = start; i < nums.length; i += 1) {
    // push current element into tempArr
    tempArr.push(nums[i]); // choose
    // recursive function
    backtrack(output, tempArr, nums, i + 1); // explore
    tempList.pop(); // unchoose 
  }
}

// * test cases!!
console.log(subsets([1,2,3])); // -> [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]