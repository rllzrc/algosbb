// * Put Your Reps In ~ BB Challenges!!!
// ** --> { Longest Substring Without Repeating Characters! }

// T A S K !!

// Given a string, find the length of the longest substring without repeating characters.

// * first attempt: brute force
const lengthOfLongestSubstring = s => {
  // create a variable to store the length of the string
  const length = s.length;
  // create a counter variable to keep track of longest substring
  let counter = 0;

  // loop through the string
  for(let i = 0; i < length; i += 1) {
    // second loop will check the next element
    for(let k = i + 1; k < length; k +=1) {
      // run helper function here and check boolean return value
      if(allUnique(s, i, k)) {
        counter = Math.max(counter, k - i);
      }
    }
  }
  return counter; 
}

// helper function to check if substrings are unqiue chars
const allUnique = (s, start, end) => {
  // create a new set to store characters within
  const set = new Set();

  // iterate through the string
  for(let i = start; i < end; i += 1) {
    // create a variable to keep track of current char
    let char = s[i];
    // check if set already has the char, if not add it
    if(set.has(char)) {
      return false;
    } else {
      // else, add it to the set!
      set.add(char)
    }
  }
  console.log(set);
  return true;
}

// * test cases:
console.log(lengthOfLongestSubstring("abcabcbb")); // -> 3
console.log(lengthOfLongestSubstring("bbbbb")); // -> 1
console.log(lengthOfLongestSubstring("pwwkew")); // -> 3