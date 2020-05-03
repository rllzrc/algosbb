// * Day 3 of 30 Days of Code Challenge Part II (May Edition)!!
// * Ransom Note or Can Construct 

// TASK !!!
// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// * first attempt using cache / hashmap:
const canConstruct = (ransomNote, magazine) => {
  // count characters in magazine
  // go through ransom note and decrement count of that letter

  // count number of characters in magazine
  const cache = {};

  for(let i = 0; i < magazine.length; i += 1) {
    if(cache[magazine[i]]) {
      cache[magazine[i]] += 1;
    } else {
      cache[magazine[i]] = 1;
    }
  }

  // loop through the note and check against cache magazine map
  for(let i = 0; i < ransomNote.length; i += 1) {
    // check if current character is not in cache map(in magazine) return false
    if(!cache[ransomNote[i]]) return false;
    // if found in cache, decrease value
    cache[ransomNote[i]] -= 1;
  }
  return true;
};

// * test cases!!
console.log(canConstruct("a", "b")); // -> false
console.log(canConstruct("aa", "ab")); // -> false
console.log(canConstruct("aa", "aab")); // -> true
