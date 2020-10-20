// ** ctci  -- Daily Reps! 
// ** --> { First Unique Character In A String !!! }

// T A S K !!
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// * first attempt:
const firstUniqChar1 = s => {
  // edge case check
  if(!s || s.length === 0) return -1; 
  // create a cache/hash set frequency counter using Map
  const map = new Map(); 
  // add key value/pairs
  for(let char of s) {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }

  console.log(map);

  // find the index
  for(let i = 0; i < s.length; i += 1) {
    if(map.get(s[i]) === 1) return i;
  }
  
  return -1;
}


// * second attempt: using reg cache object
const firstUniqChar = s => {
  // edge case check
  if(!s || s.length === 0) return -1;
  // create a variable to return out result 
  let result = -1;
  // create a variable to store char frequency
  const cache = {};
  // map out key/val pairs in cache
  for(let i = 0; i < s.length; i += 1) {
    // check if it doesnt exist in cache, add it, else increase value by 1
    // create a variable to store current char
    let curr = s[i];
    if(!cache[curr]) {
      cache[curr] = 1;
    } else {
      cache[curr] += 1; 
    }
  }
  //console.log(cache);
  // loop through cache and s + check which value has the first 1
  for(let i = 0; i < s.length; i += 1) {
    if(cache[s[i]] === 1) {
      return i;
    }
  }
  return result; 
}

// * test cases! 

console.log(firstUniqChar('leetcode')); // -> 0
console.log(firstUniqChar('loveleetcode')); // -> 2

// * -------------
// * CTCI Version 
// Implement an alogo to determine if a string has all unqiue characters. What if you can't use additional data structures?

// input: string
// ouptut: boolean
// constraints: can't use additional data structures + optimize
// edge cases: empty string

// * time complexity: O(n) - linear
// * space complexity: O(n) - linear 

const isUnique = s => { 
  // check each character and populate it into a hash map/table
  // if we find that the character is already there, we return false
  // return true once done checking and only one char is found
  const cache = {}
  for(let char of s) {
    if(!cache[char]) {
      cache[char] = true;
    } else {
      return false;
    }
  }
  return true;
}

// * test cases
console.log(isUnique('leetcode')); // -> false
console.log(isUnique('loveleetcode')); // -> false
console.log(isUnique('ss')); // -> false
console.log(isUnique('s')); // -> true
console.log(isUnique('reading')); // -> true
console.log(isUnique('')); // -> true