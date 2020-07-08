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

// * second attempt: cleaner code version of above ~
const charCount2 = str => {
  // create a cache object to store char frequency in key/val pairs
  const cache = {};
  // iterate using for of loop, so no need to declare i values, easier to access current char
  for(let char of str) {
    // convert each character to lowercase
    char = char.toLowerCase();
    // check with regex for alphanumeric values
    if(/[a-z0-9]/.test(char)) {
      // use truthy values and || instead of if/else statements
      cache[char] = ++cache[char]|| 1;
    }
  }
  return cache;
}

// * third attempt: use callback function for better readability and character code logic
const charCount3 = str => {
  // create a cache object to store char freq values
  const cache = {};
  // iterate through the characters in the string
  for(let char of str) {
    // check if current char is an alphanumeric one, run callback in if block
    if(isAlphaNumeric(char)) {
      // convert to lowercase
      char = char.toLowerCase();
      // add key/val pair or + 1 to cache
      cache[char] = ++cache[char] || 1;
    }
  }
  return cache;
}

const isAlphaNumeric = char => {
  // creat a variable to store current char and convert it to its corresponding character code
  let code = char.charCodeAt(0); // -> can pass it nothing, 0 is just more declarative
  if (!(code > 47 && code < 58) && // numeric values (0-9)
    !(code > 64 && code < 91) &&  // upper alphabet (A-Z)
    !(code > 96 && code < 123)) { // lower alphabet (a-z)
    return false;
  }
  return true; 
}

// * test cases!
console.log(charCount3('hello world!')); 