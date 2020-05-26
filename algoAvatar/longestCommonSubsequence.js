// * Get Your Reps In ~ !!
// * Longest Common Subsequence aka Longest Substring Without Dupes ~

// build hash table to keep track of character frequencies
// create a variable for a start index value
// create another variable to build the longest subsequence
// if character already exists - update the start index value
// start index = max of start index (current) + position of the last current letter (index) + 1
// this will be our new potential substring start pointer
// in the hash table, update the last seen value of the character index

// * first attempt: use hash table / memoization
// time complexity:
// * O(n) -> constant -> n is the length of the input string
// space complexity:
// * O(min(n,a)) -> the minimum value of the characters frequency in compared to the number of letters in the alphabet (a = length of alphabet represented by input string uniquely)

const longestSubstringWithoutDuplication1 = string => {
  // initiate a hash table variable
  const cache = {};
  // longest substring result arr
  let longest = [0, 1];
  // declare a start index value
  let startIndex = 0;

  // iterate through the string
  for(let i = 0; i < string.length; i += 1) {
    // check if current character already exists in cache, update startIndex value
    if(cache[string[i]]) {
      startIndex = Math.max(startIndex, cache[i] + 1);
    }
    
    // compute the difference, i + 1 to increase current position to the next
    // if it is smaller, then we update longest value
    if(longest[1] - longest[0] < i + 1 - startIndex) {
      longest = [startIndex, i + 1]
    }

    // update cache table
    // * PRO TIP!!
    // this will take care of both cases:
    // either we've already seen it or haven't, no matter what it adds or overwrites it in our hash table
    cache[string[i]] = i;
  }

  return string.slice(longest[0], longest[1]);
}

// * refactored code from above:
const longestSubstringWithoutDuplication = string => {
  // initiate a cache / hash table to store character frequency list
  const cache = {};
  // create longest variable to keep track of return result later
  let longest = [0, 1];
  // create a variable to keep track of current/start index
  let startIndex = 0;

  // iterate through the string
  for(let i = 0; i < string.length; i += 1) {
    // create a variable to keep track of current element and for clarity later
    const char = string[i];
    if(char in cache) {
      // reassign startindex value
      startIndex = Math.max(startIndex, cache[char] + 1);
    }

    // compute the difference, i + 1 to increase current position to the next
    // if it is smaller, then we update longest value
    if(longest[1] - longest[0] < i + 1 - startIndex) {
      longest = [startIndex, i + 1];
    }

    // update cache table
    // * PRO TIP!!
    // this will take care of both cases:
    // either we've already seen it or haven't, no matter what it adds or overwrites it in our hash table
    cache[char] = i;
  }

  return string.slice(longest[0], longest[1]);
}

// * test cases !!
console.log(longestSubstringWithoutDuplication('clementisacap')); // -> "mentisac"
console.log(longestSubstringWithoutDuplication('abcdeabcdefc')); // -> abcdef
console.log(longestSubstringWithoutDuplication('abacacacaaabacaaaeaaafa')); // -> 'bac'