// ** @mcrsft Arrays + Strings Reps Challenge  
// ** --> { reverse string !!! }

// T A SK !!!

// Given an array of strings (strs) group the anagrams together. You can return the answer in any order.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 

// * --- Roadmap --- *
// input: array of strings
// output: an array of grouped anagrams (in any order)
// constraints: optimize
// edge cases: 

// * main squeeze:
// two strings are anagrams if and only if their sorted strings are equal 
// create a cache / map where eacn key is a sorted string, and each value is the list of strings from the initial input that when sorted are equal to K.

// * time complexity:
// * space complexity: 
const groupAnagrams = (strs) => {
  // edge case check
  if(strs.length === 0) return result;
  // create a map of strings as the key and an array of strings as its value
  // key/value layout: sort letters => aet: ["ate", "eat", "tea"];
  const map = {};
  // iterate through str, sort current index string value
  // push that value into the array 
  for(let words of strs) {
    // create a variable for the key -> key will be each str at that index, for example 'eat', 'tea', 'tan', etc.
    // convert to array so we can use the sort method, then convert to a str again 
    // sort out key to create the "blueprint" for the following anagrams in that bucket
    let sorted = words.split('').sort().join('');
    console.log(sorted); // -> aet, ant, abt 
    // populate the map with these key/val pairs
    if(!map[sorted]) {
      // if map does not contain the sorted key, add it with the current index value 
      map[sorted] = [words];
    } else {
      // if it already has the key, simply push the current index value to the array
      map[sorted].push(words);
    }
  }
  // console.log(map)
  return Object.values(map);
}

