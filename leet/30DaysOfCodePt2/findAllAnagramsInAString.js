// ** Day 17 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Find All Anagrams in a String ! }


// T A S K !!!
// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// roadmap:
// its a permutation basically ~ (rearrangement of the letters)
// take length of p to form a window since the anagram will be made up of letters in p
// compare window with p and if it matches, store the index in an array and increase window by 1 to the right
// make two dictionaries to store counter or frequency of characters
// if both are equal, add both starting indices

// * first attempt: use sliding window approach
const findAnagrams = (s, p) => {
  // create a new cache variable
  const pCache = {};

  // loop through p and map out its values
  for(let i = 0; i < p.length; i += 1) {
    if(pCache[p.charAt(i)]) {
      pCache[p.charAt(i)] += 1;
    } else {
      pCache[p.charAt(i)] = 1;
    }
  }

  // create a new result variable
  const result = [];
  // create a second cache dictionary to compare frequency values
  const pCacheCopy = {};

  // loop through s and map out values
  for(let i = 0; i < s.length; i += 1) {
    if(pCacheCopy[s.charAt(i)]) {
      pCacheCopy[s.charAt(i)] += 1;
    } else {
      pCacheCopy[s.charAt(i)] = 1;
    }

    // sliding window
    if(i >= p.length) {
      // create a varaible to hold on to current character
      let char = s.charAt(i-p.length);
      // check dictionaires
      if(pCacheCopy[char] === 1) delete pCacheCopy[char];
      else 
      pCacheCopy[char]--;
    }
    // invoke helper
    if(matches(pCache, pCacheCopy)) result.push(i-p.length + 1);
  }

  return result;
}

// helper function:
const matches = (map1, map2) => {
  // create key variables to hold on to property 
  let key1 = Object.keys(map1);
  let key2 = Object.keys(map2);

  // compare dictionary values
  if(key1.length !== key2.length) return false; 

  for(let i = 0; i < key1.length; i += 1) {
    if(map1[key1[i]] !== map2[key2[i]]) return false;
  }

  return true;
}

// * test cases!!
console.log(findAnagrams("cbaebabacd", "abc")); // -> [0,6]
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
console.log(findAnagrams("abab", "ab"
)); // -> [0,1,2]