// * Day 6 of 30 Days of Code! --> Group Anagrams! ~

// * TASK!
//Given an array of strings, group anagrams together.

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: an array of arrays, each element is its own group
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// Note:
// All inputs will be in lowercase.
// The order of your output does not matter.

// * brute force approach: Direct Comparison

// * in the event of edge cases in which all inputs aren't necessarily lower-cased
const sanitizeString = str => {
  // make all letters lowercase
  // use replace method to search through string using regex pattern and replce every non alphabetical character with an empty string. makes sure we are only dealing with letters~ no spaces or symbols
  // split to split stting into an array of characters 
  // sort it out so its all alphabetical, join to bring it all back into a string again!
  return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
}

// then you can compare each string with another by invoking the below function (compares 2);

// * sort strings and check if both are the same:
const isAnagram = (str1, str2) => {
  const sanitizeString = str => {
    return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
  }
  return sanitizeString(str1) === sanitizeString(str2);
}

// * test cases!

console.log(isAnagram('silent', 'listen')); // --> true

// -------------------------------------------

// * second approach: character map comparison, these are little baby functions to assist in the overall anagram hunt!

// * find substring of a given string
// separates each substring from the given input into an arr of elements comprising it
// slice will return a shallow copy of elements from beginning to ending index given
const getAllSubStrings = str => {
  let i, k, result = [];

  for(let i = 0; i < str.length; i += 1) {
    for(let k = i + 1; k < str.length + 1; k += 1) {
      result.push(str.slice(i,k));
    }
  }
  return result;
}

// * create a character map 
const createCharMap = str => {
  
  // create an empty object to store key / value pairs
  let charMap = {};

  // loop through each character of the string, if it already exists in the map, increase its value, else add it to map with a value of 1
  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap;
}

// ---------------------------------

// * third approach: set up a hash map key!

const groupAnagrams = arr => {

  let hash = {};

  // sort the characters in alphabetical order so its easier to track as a key on the hash map object
  // value will be an array of elements that contains each element that comprises of the key
  arr.forEach((el) => {
    let letters = el.split('').sort();

    // ternary to check if hash[letters] is already a key in the has object, if it is, push the element as its value, if not add it as an entry into the array
    hash[letters] ? hash[letters].push(el) : hash[letters] = [el];
  });

  console.log(hash);
  // get it ready for the final result, since we only need the values, use Object.values();

  const output = Object.values(hash);
  return output;
}




// * test cases!

console.log(getAllSubStrings("eat", "tea", "tan", "ate", "nat", "bat"));
console.log(createCharMap("eat", "tea", "tan", "ate", "nat", "bat"));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // --> 
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

