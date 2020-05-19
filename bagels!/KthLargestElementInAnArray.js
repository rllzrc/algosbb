// * Bagels Group LeetCode Challenge --> Kth Largest Element in an Array

// T A S K !!!
// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// * Roadmap: ~
// sort nums, now its in order, then return the kth to last thing
// * first attempt: brute force/naive solution use the sort method!
// runtime complexity:
// * O(n log n) -> sorting overhead
const findKthLargest = (nums, k) => {
  // sort out array of nums
  const sortedArr = nums.sort();
  // then return out the kth index in the nums array
  return sortedArr[sortedArr.length - k];
}

// * test cases !!
console.log(findKthLargest([3,2,1,5,6,4], 2)); // -> 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // -> 4