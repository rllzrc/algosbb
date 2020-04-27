// * Chapter 1 Practice --> Binary Search

// Binary search function takes a sorted array and an item. If the item is in the array, the function returns its position. 

// * HINTS !!!
// keep track of what part of the array you have to search through --> low = 0; high = .length-1 

// each time check the middle element; mid = (low + high) / 2 --> guess = arr[mid]

// check if guess is too low, update low accordingly --> if guess < item, low = mid + 1

// if guess is too high, update high

const binarySearch = (arr, item) => {
  // create a variable to track low items
  let low = 0;
  // create a variable to track high items --> aka last item on the list
  // low and high variables will keep track of which part of the list you're searching in
  let high = arr.length-1;

  // loop through while low <= high --> while we haven't narrowed it down to one element
  while(low <= high) {
    // create a variable mid to keep track of middle values
    // use Math.floor to round down if not even number
    const mid = Math.floor((low + high) / 2);
    //console.log('mid', mid);
    // create a variable called guess to keep track of options
    const guess = arr[mid];

    // check if guess === item aka we found it!
    if(guess === item) {
      return mid;
    }

    // check if guess was way too high
    if(guess > item) {
      high = mid - 1;
    } else { //--> if it was too low
      low = mid + 1;
    }
  }

  return null;
}

// * test cases!!
console.log(binarySearch([1,3,5,7,9], 3)); // --> 1
console.log(binarySearch([1,3,5,7,9], -1)); // --> null meaning not found

// ** additional exercises/notes:

// 1. Suppose you have a sorted list of 128 names. What's the maximum number of steps it would take via binary search? >> 7 --> 128/2 = 64/2 = 32/2 = 16/2 = 8/2 = 4/2 = 2/2 = 1

// 2. Double the size of the list, now at 256. >> 8, just add an extra step.

// *** Unlike simple search which runs on LINEAR time O(n) >> (where the max number of guesses is the same size as the list), binary search runs in ** LOGARITHMIC ** time (aka log time) ---> O(log n)

// Big O doesn't tell you the speed in seconds, but lets you compare the number of operations; aka how fast the algorithm grows.

