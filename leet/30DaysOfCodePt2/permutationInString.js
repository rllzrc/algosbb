// ** Day 18 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Permutation In String ! }

// T A S K!!

// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

// * ~ roadmap:
// use length of s1 as first window 
// create a counter/cache variable to store number of frequencies of characters
// s1 counter dictionary and window counter
// keep comparing if frequencies are the same, return true else slide window to the right and continue to compare

// * first attempt: using sliding window method
const checkInclusion = (s1, s2) => {
  // quick edge case check
  if(s1.length > s2.length) {
    return false;
  }

  // initialize counter/cache dictionary variables
  const s1Cache = {};
  const windowCounter = {};

  // map out chars into s1Cache
  for(let i = 0; i < s1.length; i += 1) {
    if(!s1Cache[s1[i]]) {
      s1Cache[s1[i]] = 1;
    } else {
      s1Cache[s1[i]] += 1;
    }
  }


  // iterate through s2
  for(let i = 0; i < s2.length; i += 1) {
    // add characters into windowCounter cache
    if(!windowCounter[s2[i]]) {
      windowCounter[s2[i]] = 1;
    } else {
      windowCounter[s2[i]] += 1;
    }
    
    console.log('window:', windowCounter);
    console.log('s1cache:', s1Cache);
    // if i is greater than the window, we need to find the left element to delete (reducing) the freq to the left to move on to the right side
    if(i >= s1.length) {
      // create a new variable to keep track of left element
      leftElement = s2[i - s1.length];

      console.log('left:', leftElement);
      // if character frequency is 1, delete it from cache
      if(windowCounter[leftElement] === 1) {
        delete windowCounter[leftElement];
      } else {
        windowCounter[leftElement] -= 1;
      }
    }

    if(windowCounter === s1Cache) {
      return true;
    }
  }

  return false
}

// * test cases!!
console.log(checkInclusion("ab", "eidbaooo")); // -> true
//console.log(checkInclusion("ab", "eidboaoo")); // -> false
