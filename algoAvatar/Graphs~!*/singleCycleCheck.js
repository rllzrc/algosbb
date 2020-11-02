// ** AE: Graphs Daily Reps Challenge
// ** --> { single cycle check !!! }

// T A S K !!

// Write a function that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index. 

// * Input: an array of integers
// Output: a boolean value
// Constraints: optimize
// Edge Cases: make sure you are visiting N elements, if you're back on the starting element before visiting the N elements then that's a CYCLE >> if you end up visiting all N elements but you're not at the starting point = MULTIPLE CYCLES + negative numbers situation

// * Time: O(N) - linear
// * Space: O(1) - constant

// * first attempt:
const hasSingleCycle = array => {
  // create variables to keep track of # of elements visited + index
  let numElementsVisited = 0;
  let currentIdx = 0;
 // iterate through the array >> ideally you only want to visit N (# of els) in the array
  while(numElementsVisited < array.length) {
    // if revisiting the first element after already checking it out (& there are still elements left to visit in the array), return false since its MULTIPLE cycles instead of single
    if(numElementsVisited > 0 && currentIdx === 0) return false;
    // else, increase the number of elements visited
    numElementsVisited += 1;
    // update index as well
    currentIdx = getNextIndx(currentIdx, array);
  }
  // once we've visited all N elements then we can assume that we're back on the 0th index, otherwise its false due to the multiple cycles check
  return currentIdx === 0;
}

// * helper function to get next index value based on the 'jump'
const getNextIndx = (currentIdx, array) => {
  // goal: to see how many elements forwards or backwards needed to go through the jumps in the array
  const jump = array[currentIdx];
  // this % operation ensures that indices are not out of bounds
  const nextIdx = (currentIdx + jump) % array.length;
  // to account for negative nums -- first time you hit -4 the above line becomes -1 % 6 returning -1
  // anytime you have a negative num in the % you return the first num, so if its a negative number then you just add nextIdx + array.length since its the same mathematically
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length; 
}

// * test cases!!!
console.log(hasSingleCycle([2,3,1,-4,-4,2])); // -> true