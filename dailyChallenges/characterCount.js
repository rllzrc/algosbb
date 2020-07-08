// * Character Count!
// T A S K !
// count number of characters in a given string

// * first attempt: iteratively with RegEx!
const charCount = str => {
  // create a cache variable to store char frequency counts
  const cache = {};
  // iterate through str and add char to cache
  for(let i = 0; i < str.length; i += 1) {
    // create a variable to keep track of current character
    let char = str[i].toLowerCase();
    // check for alpha numeric characters with regex
    if(/[a-z0-9]/.test(char)) {
      // check if it exists in cache, if so, add + 1 to its value
      if(cache[char] > 0) { 
        // if the value is greater than zero, then it exists 
        cache[char] += 1;
      } else {
        // if already in cache, add + 1 to its value
        cache[char] = 1;
      }
    }
  }
  return cache; 
}