// * Put Your Reps In ~ BB Challenges!!!
// ** --> { Longest Substring Without Repeating Characters! }

// T A S K !!

// Given a string, find the length of the longest substring without repeating characters.

// * first attempt: brute force
// time complexity:
// * O(n^3) -> must scan all chars
// space complexity:
// * O(min(n,m)) -> size of the set is upper bounded by the size of the string n and size of charset/alphabet m
const lengthOfLongestSubstring1 = s => {
  // create a variable to store the length of the string
  const length = s.length;
  // create a counter variable to keep track of longest substring
  let counter = 0;

  // loop through the string
  for(let i = 0; i < length; i += 1) {
    // second loop will check the next element
    for(let k = i + 1; k < length; k +=1) {
      // run helper function here and check boolean return value
      // k is the end point and i is the start
      // thus subtract k - i -> find the max value will give the longest substring sequence 
      if(allUnique(s, i, k)) {
        //console.log('k:', k);
        //console.log('i:', i);
        counter = Math.max(counter, k - i);
      }
    }
  }
  return counter; 
}

// helper function to check if substrings are unqiue chars
// * PRO-TIP: sets are a special data structure that is a collection of values (without keys) that are all unique/can only occur once
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
  //console.log(set);
  return true;
}

// * second attempt: sliding window approach
// use hash set as a sliding window to check the chars
// sliding window = abstract concept commonly used in array/string probs
// window = range of elements usually defined by the start and end indices --> slide its two boundaries to a certain direction
// use the hash set to stor chars in a current window, then slide the index to the right, if not in hash set, keep sliding to find the max size of substrings without dupes at index start

// time complexity:
// * O(2n) = O(n) -> worst case each char will be visited twice by i and k index vars
// space complexity:
// * O(min(m,n)) -> same as solution #1
const lengthOfLongestSubstring2 = s => {
  // create a variable to keep track of s's length
  const length = s.length;
  // create a new hash set DS
  const set = new Set();
  // create pointer variables for sliding window effect, all initialized to 0 for now
  let counter = 0;
  let i = 0;
  let k = 0;
  // iterate while i and k are less than length of string
  while(i < length && k < length) {
    // extend the range if applicable
    if(!set.has(s[k])) {
      // if the char does not exist, add it to the set
      set.add(s[k++]);
      counter = Math.max(counter, k - i);
    } else {
      set.delete(s[i++]);
    }
    console.log(set);
  }
  return counter; 
}

// * third attempt: sliding window optimized
// from 2n steps to n steps
// instead of set, use Map to well..map chars to their index
// if we find a repeating char, skip 
// no need to increase i bit by bit, skip all elements within range and let i be k + 1

// time complexity:
// * O(n)
// space complexity:
// * Hash Map -> same as above / Table: O(m) -> size of charset

const lengthOfLongestSubstring = s => {
  // create a variable to store length value
  const length = s.length;
  // counter to keep track of answer
  let counter = 0;

  // create a new hash map to store charset
  // map = collection of keyed values
  const map = new Map();

  //iterate through and extend window range of i, k
  for(let i = 0, k = 0; k < length; k += 1) {
    if(map.has(s[k])) {
      i = Math.max(map.get(s[k], i));
    }
    // reassign counter and add to map if not found yet
    counter = Math.max(counter, k - i + 1);
    map.set(s[k], k + 1);
  }
  return counter; 
}

// * test cases:
console.log(lengthOfLongestSubstring("abcabcbb")); // -> 3
console.log(lengthOfLongestSubstring("bbbbb")); // -> 1
console.log(lengthOfLongestSubstring("pwwkew")); // -> 3