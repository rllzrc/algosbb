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
const checkInclusion1 = (s1, s2) => {
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


  // add charcter frequency for the first string inside a cache obj
  // maintain sliding window for s2 checking if the character's frequency is inside the object or not
  // check if the window exceeds the length and update sliding window accordingly 
// * second attempt: update the sliding window approach above
const checkInclusion = (s1, s2) => {
  // create a variable to store index of window starting position, if any matches are found, and the character frequency cache
  let windowStart = 0;
  let matches = 0;
  let charCache = {};

  // loop through the first string and map out characters into the object
  for(let i = 0; i < s1.length; i += 1) {
    if(!charCache[s1[i]]) {
      charCache[s1[i]] = 1;
    } else {
      charCache[s1[i]] += 1;
    }
  }

  // loop through the second string and check the character frequency cache
  for(let windowEnd = 0; windowEnd < s2.length; windowEnd += 1) {
    // create a new variable to hold on to the right side character
    // windowEnd is treated like the i variable keeping track of the index, changed the name so its clearer to understand upon review..
    let rightChar = s2[windowEnd];

    // check if window element is found in the character freq
    if(rightChar in charCache) {
      // if found, delete so we don't count duplicates
      // matches will keep track of the frequencies found and if the object's values = matches, then return true
      charCache[rightChar] -= 1;
    }

    if(charCache[rightChar] === 0) {
      matches += 1;
    }

    // if object's keys aligns with matches, return true
    if(matches === Object.keys(charCache).length) return true;

    //console.log('end:', windowEnd);
    // check if windowEnd is greater than s1 or the pattern
    if(windowEnd >= s1.length - 1) {
      // create a left variable once windowEnd progresses, this will point to the "start" of the window
      // now we will have two pointers aka the window section where left will be the element before and right will be the next element or character in the string
      let leftChar = s2[windowStart];
      windowStart += 1;

      if(leftChar in charCache) {
        if(charCache[leftChar] === 0) {
          matches -= 1;
        }
        charCache[leftChar] += 1;
      }
      console.log('leftChar', leftChar);
    }

    console.log('matched:', matches);
    console.log('cache', charCache);
    console.log('rightChar', rightChar);
  }

  return false;
}

// * test cases!!
console.log(checkInclusion("ab", "eidbaooo")); // -> true
console.log(checkInclusion("ab", "eidboaoo")); // -> false
