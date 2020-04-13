// * Day 12 of 30 Days of Code ~ --> Last Stone Weight

// TASK

// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Input: [2,7,4,1,8,1]
// Output: 1

// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

// * first pass with while loops and slice

const lastStoneWeight1 = stones => {

  // create a new varaible to store sorted stones in from greatest value to least
  // loop through stones array and check if length is > 1
  while(stones.length > 1) {
    stones = stones.sort((a,b) => b-a);
    // check if first element is equal to the next
    if(stones[0] === stones[1]) {
      stones = stones.slice(2);
    } else {
      stones[1] = stones[0] - stones[1];
      stones = stones.slice(1).sort((a,b) => b-a);
    }
  }
  return stones.length ? stones[0]: 0;
}

// * using recursion 

const lastStoneWeight = stones => {
  // base case
  if(stones.length <= 1) return stones[0] || 0;

  // sort out stones array from greatest to least values
  stones.sort((a,b) => b-a);
  // use ternary operator to check if stones[0] === stones[1] if not, remove out items from the following indexes:
  stones[0] === stones[1] ? stones.splice(0,2) : stones.splice(0, 2, stones[0] - stones[1]);

  // recursive call
  return lastStoneWeight(stones);
}

// * test cases!

console.log(lastStoneWeight([2,7,4,1,8,1])); // --> 1