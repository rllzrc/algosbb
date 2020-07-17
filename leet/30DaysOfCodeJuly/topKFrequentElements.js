// ** Day 17 of 30 Days of Code Challenge Part iii -- June Edition! 
// ** --> { Top K Frequent Elements ! }

// T A S K !!
// Given a non-empty array of integers, return the k most frequent elements.

// Note:
//     You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
//     Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
//     It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
//     You can return the answer in any order.

// * first attempt:
const topKFrequent = (nums, k) => {
  // quick edge case checks
  if(nums.length === 0 || nums === null) {
    return 0;
  }
  
  // create an output variable to return out later
  let output = [];
  // create a cache object to store num frequencies
  let cache = {};
  // iterate over the nums array and map out its key/val pair within cache obj
  for(let i = 0; i < nums.length; i += 1) {
    // create a var to set current element
    let curr = nums[i];
    // add key/val pair if it doesnt exist
    if(!cache[curr]) {
      cache[curr] = 1;
    } else {
      // if it is already there, +1 to its value
      cache[curr] += 1;
    }
  }

  // the for each version of above ^^
  // nums.forEach(n => map[n] ? map[n] += 1 : map[n] = 1);
  
  //console.log(cache)
  // sort out map keys based on frequency
  // O(log n) --> n = length of nums
  let sortedKeys = Object.keys(cache).sort((a, b) => cache[b] - cache[a]);

  // take the first K elements from sortedKeys
  for(let i = 0; i < k; i += 1) {
    output.push(sortedKeys[i]);
  }
  return output;
}

// * test cases!
console.log(topKFrequent(nums = [1,1,1,2,2,3], k = 2)); // -> [1,2]
console.log(topKFrequent(nums = [1], k = 1)); // -> [1]
console.log(topKFrequent(nums = [1,1,2,2,2,3,3,3,4,4,4,5,5], k = 3)); // -> [2,3,4]