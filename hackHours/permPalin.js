// less brute-forcey: aux/tracker object to find how many character appear an odd number of times
//    in a palindrome, a maximum of one character can appear an odd number of times
const permPalin = (str) => {
  // improper input type
  if (typeof str !== 'string') return false;
​
  // object to track how many instances of a character exist
  const tracker = {};
​
  // iterate through the string
  for (let i = 0; i < str.length; i++) {
    // if the current character is not in the tracker, initialize it at zero
    const character = str[i];
    if (tracker[character] === undefined) tracker[character] = 0;
    // increment the character's count in the tracker
    tracker[character] += 1;
​
    // remove the key-value pair if the count reaches 2
    if (tracker[character] === 2) delete tracker[character];
  }
​
  // there can be 0 or 1 character that has an odd number of values
  // if there is 1 or less keys, return true
  return Object.keys(tracker).length <= 1;
};
​
// console.log(permPalin('abab')); // true
// console.log(permPalin('vbaba')); // true
// console.log(permPalin('cbac')); // false
// console.log(permPalin('a')); // true
​
const bruteForcePerms = (str) => {
  // skipping sanitizing the input string (for spaces, caps/lower cases, etc.)
​
  // array to hold all permutations of string
  const allPerms = [];
​
  // helper function that makes permuations based on a variable of available characters
  // and a variable to store the current permutation "perm"
  const makePerms = (characters, perm = '') => {
    // if characters are used up, push the perm to the allPerms array
    if (characters.length === 0) return allPerms.push(perm);
​
    // otherwise loop through the characters and recursively call makePerms
    // with the current character removed from the characters string, and added onto the perm string
    for (let i = 0; i < characters.length; i++) {
      makePerms(characters.slice(0, i) + characters.slice(i + 1), perm + characters[i]);
    }
  };
​
  // run makePerms to fill allPerms array
  makePerms(str);
  // console.log(allPerms);
​
  // check if any of the values in allPerms is a palindrome
  // Array.prototype.some method takes a callback, runs it on all values of an array
  // and returns true if any returned values evaluate to true, otherwise false if it reaches the end
  return allPerms.some((string) => {
    // console.log('is end hoisted?', end);
    for (
      let start = 0, end = string.length - 1; // initialize start and end variables
      start < end; // conditional
      start += 1, end -= 1 // increment start, decrement end
    ) {
      if (string[start] !== string[end]) return false;
    }
    // console.log('is end hoisted?', end);
    return true;
  });
};
​
// console.log(bruteForcePerms('abab')); // true
// console.log(bruteForcePerms('vbaba')); // true
// console.log(bruteForcePerms('cbac')); // false
// console.log(bruteForcePerms('a')); // true
​
const swapChars = (string, i, j) => {
  const split = string.split('');
  [split[i], split[j]] = [split[j], split[i]];
  return split.join('');
};
​
// console.log(swapChars('abc', 0, 2));
​
const perms = [];
const permsInPlace = (string, start = 0) => {
  if (start === string.length) return perms.push(string);
  for (let i = start; i < string.length; i++) {
    const swapped = swapChars(string, start, i);
    permsInPlace(swapped, start + 1);
  }
};
// const string = 'abc';
// permsInPlace(string);
// console.log(perms);