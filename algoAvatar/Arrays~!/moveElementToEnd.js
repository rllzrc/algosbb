// ** AE: Arrays Reps Challenge  
// ** --> { Move Element To End !!! }

// T A SK !!!

// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array. 

// The function should perform this in place (i.e. it should mutate the input array) and doesn't need to maintain the order of the other integers. 

// * --- Roadmap --- *
// input: an array of integers + an integer value (to move to end)
// output: new array with integer chosen moved to the end
// constraints: optimize, perform operations in place 
// edge cases: add extra boundary for overlap within second while loop in case i goes past k --> for extra challenge, instead of using a sort solution - O(n log(n)) time, see if we can find a linear solution instead 

// * main squeeze:
// declare pointer variables, initialize both to be within boundary of the array (start/end)
// start moving them inwards, continously checking if we can swap values

// * time complexity: O(N) -> N = length of the array
// * space complexity: O(1) -> no extra/auxiliary use of data structures, swap opertaions are constant with the use of pointers 

const moveElementToEnd = (array, toMove) => {
  // declare pointers to move inwards in the array
  // initialized within the bounds of the array
  let i = 0;
  let k = array.length - 1;
  // start moving inwards, continously check values to see if a swap is available 
  // when they overlap or so long as i is less than k (to the left of k) we can do our main logic ~
  while(i < k) {
    // remember: k is holding on to the position where we want to swawp, so if it is pointing to the value to move, then we keep moving inwards or to the left
    // * i < k is within this while loop as well bc of edge cases in which i accidently goes past k within the first loop, this is to ensure we are not overlapping the two pointers
    while(i < k && array[k] === toMove) k -= 1;
    // perform the swap, we found the value
    if(array[i] === toMove) {
      // run swap helper method
      swap(i, k, array);
    }
    // move i forward, to the right
    i += 1;
  }
  return array;
}

function swap(i, k, array) {
  // create a temp variable to hold on to value prior to swap

  // * this is basically saying:
  // array[i], array[k] 
  // = array[k], array[i];
  const temp = array[k];
  array[k] = array[i];
  array[i] = temp;
}


